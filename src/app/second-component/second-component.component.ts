import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  std:Student = new Student(10,"Ahmed",23)
}
