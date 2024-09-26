import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EidtStudentComponent implements OnInit, OnChanges
{
  constructor(public StudentService: StudentServiceService){}
  
  EditedStudent: Student | null = new Student(0, "", 0);
  
  ngOnInit(): void 
  {
    this.EditedStudent = this.StudentService.EditedStudent; 
  }
  
  ngOnChanges(changes: SimpleChanges): void 
  {
    throw new Error('Method not implemented.');
  }

  edit()
  {
    this.StudentService.edit(this.EditedStudent!);
  }

  // Save()
  // {
  //   this.StudentService.addStudent(this.newStudent);
  // }


}
