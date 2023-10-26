import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filtering-form',
  templateUrl: './filtering-form.component.html',
  styleUrls: ['./filtering-form.component.scss']
})
export class FilteringFormComponent {
  @Output() handleForm = new EventEmitter<FormGroup>()
  @Output() resetForm = new EventEmitter<FormGroup>()

  form = new FormGroup({
    issuanceDateFrom: new FormControl<string>(''),
    issuanceDateTo: new FormControl<string>(''),
    actualDateFrom: new FormControl<string>(''),
    actualDateTo: new FormControl<string>(''),
    checkOverdue: new FormControl<boolean>(false),
  })

  search() {
    this.handleForm.emit(this.form)
  }

  reset() {
    this.form = new FormGroup({
      issuanceDateFrom: new FormControl<string>(''),
      issuanceDateTo: new FormControl<string>(''),
      actualDateFrom: new FormControl<string>(''),
      actualDateTo: new FormControl<string>(''),
      checkOverdue: new FormControl<boolean>(false),
    })

    this.resetForm.emit()
  }
}
