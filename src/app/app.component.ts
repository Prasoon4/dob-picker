import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerComponent } from "./date-picker/date-picker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dob-picker';
}
