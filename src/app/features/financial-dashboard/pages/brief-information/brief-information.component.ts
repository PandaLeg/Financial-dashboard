import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IBorrower} from "../../models/borrower.model";
import {GeneralTableService} from "../../services/general-table.service";
import {IMetrics} from "../../models/metrics.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-brief-information',
  templateUrl: './brief-information.component.html',
  styleUrls: ['./brief-information.component.scss']
})
export class BriefInformationComponent implements OnInit {
  borrowers: Observable<IBorrower[]>
  metrics: IMetrics

  constructor(private readonly generalTableService: GeneralTableService) {
    this.metrics = {
      totalNumberIssued: 0,
      averageAmountIssued: 0,
      totalAmount: 0,
      totalAmountPercent: 0,
      issuedNumber: 0,
      returneesNumber: 0
    }
  }

  ngOnInit(): void {
    this.borrowers = this.generalTableService.getAll()
  }

  handleMetrics(form: FormGroup) {
    const selectedDate = new Date(form.value.currentMonth)

    this.borrowers.pipe(
      map((acc) => {
        return acc.filter(borrower => {
          const issuanceDate = new Date(borrower.issuance_date)
          const issuanceDateYear = issuanceDate.getFullYear()
          const issuanceDateMonth = issuanceDate.getMonth()

          return issuanceDateYear === selectedDate.getFullYear() && issuanceDateMonth === selectedDate.getMonth();
        })
      }))
      .subscribe(borrowers => {
        this.metrics = this.calculateMetrics(borrowers, selectedDate)
      })
  }

  calculateMetrics(borrowers: IBorrower[], selectedDate: Date): IMetrics {
    const totalNumberIssued = borrowers.length
    const issuedNumber = borrowers.length
    let averageAmountIssued = 0, totalAmount = 0, totalAmountPercent = 0,
      returneesNumber = 0

    borrowers.forEach(borrower => {
      const actualReturnDate = borrower.actual_return_date ? new Date(borrower.actual_return_date) : null

      averageAmountIssued += borrower.body
      totalAmount += borrower.body
      totalAmountPercent += borrower.percent
      returneesNumber += actualReturnDate && this.isActualDateEqualToSelected(actualReturnDate, selectedDate) ? 1 : 0
    })

    return {
      totalNumberIssued,
      averageAmountIssued: Math.round(averageAmountIssued / borrowers.length),
      totalAmount: Math.round(totalAmount),
      totalAmountPercent: Math.round(totalAmountPercent),
      issuedNumber,
      returneesNumber
    }
  }

  isActualDateEqualToSelected(actualReturnDate: Date, selectedDate: Date): boolean {
    return actualReturnDate.getFullYear() === selectedDate.getFullYear() &&
      actualReturnDate.getMonth() === selectedDate.getMonth()
  }
}
