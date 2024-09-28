import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(public StudentService: StudentServiceService, public router: Router){}

  newStudent: Student = new Student(0, "", 0, "");
  
  Save()
  {
    this.StudentService.addStudent(this.newStudent).subscribe({
      next: () => {
        this.router.navigateByUrl('/student')
      },
      error: e => {
        console.log(e);
      }
    })
  }
}
