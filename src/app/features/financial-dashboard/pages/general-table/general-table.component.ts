import {Component, OnInit} from '@angular/core';
import {GeneralTableService} from "../../services/general-table.service";
import {IBorrower} from "../../models/borrower.model";
import {map, Observable, tap} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {
  borrowers: Observable<IBorrower[]>
  isLoading: boolean = false;

  constructor(private readonly generalTableService: GeneralTableService) {
  }

  ngOnInit(): void {
    this.getAll()
  }


  handleForm($event: FormGroup): void {
    this.borrowers = this.borrowers.pipe(
      map((borrowers, index) => {
        return borrowers.filter(borrower => {
          return this.withinIssueDate(borrower, $event)
            || this.withinReturnDate(borrower, $event)
            || this.checkOverdueCredits(borrower, $event)
        })
      })
    )
  }

  resetForm(): void {
    this.getAll()
  }

  getAll() {
    this.isLoading = true
    this.borrowers = this.generalTableService.getAll()
      .pipe(
        tap(() => this.isLoading = false),
      )
  }

  withinIssueDate(borrower: IBorrower, $event: FormGroup) {
    const issuanceDate = new Date(borrower.issuance_date)
    const issuanceDateFrom = new Date($event.value.issuanceDateFrom)
    const issuanceDateTo = new Date($event.value.issuanceDateTo)

    return issuanceDate > issuanceDateFrom && issuanceDate < issuanceDateTo
  }

  withinReturnDate(borrower: IBorrower, $event: FormGroup) {
    const actualReturnDate = new Date(borrower.actual_return_date)
    const actualDateFrom = new Date($event.value.actualDateFrom)
    const actualDateTo = new Date($event.value.actualDateTo)

    return actualReturnDate > actualDateFrom && actualReturnDate < actualDateTo
  }

  checkOverdueCredits(borrower: IBorrower, $event: FormGroup) {
    const isOverdue = $event.value.checkOverdue
    const actualReturnDate = borrower.actual_return_date ? new Date(borrower.actual_return_date) : null
    const returnDate = new Date(borrower.return_date)
    const now = new Date()

    return isOverdue ? (returnDate < now && !actualReturnDate) || (actualReturnDate && actualReturnDate > returnDate) : false
  }
}
