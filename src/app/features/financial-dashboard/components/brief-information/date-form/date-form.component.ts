import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss']
})
export class DateFormComponent {
  @Output() handleForm = new EventEmitter<FormGroup>()
  form = new FormGroup({
    currentMonth: new FormControl<string>(''),
  })


  calculateMetrics() {
    const selectedDate = this.form.value.currentMonth

    if (selectedDate) {
      this.handleForm.emit(this.form)
    }
  }
}
