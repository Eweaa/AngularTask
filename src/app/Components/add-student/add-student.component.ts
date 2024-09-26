import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(public StudentService: StudentServiceService){}

  @Output()
  StudentAdd: EventEmitter<Student> = new EventEmitter<Student>();
  newStudent: Student = new Student(0, "", 0);
  Save()
  {
    this.StudentService.addStudent(this.newStudent);
  }
}
