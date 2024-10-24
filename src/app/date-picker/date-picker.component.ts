import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  dob: string = "1990-09-29"
}
