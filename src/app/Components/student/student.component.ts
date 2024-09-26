import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { AddStudentComponent } from "../add-student/add-student.component";
import { StudentServiceService } from '../../Services/student-service.service';
import { EidtStudentComponent } from "../edit-student/edit-student.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent, AddStudentComponent, EidtStudentComponent, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit, OnChanges
{
  constructor(public StudentService: StudentServiceService){}
  Students : Array<Student> = [];
  DetailedStudent: Student = new Student(0, "", 0);

  EditForm: boolean = false;
  
  ngOnInit(): void 
  {
    this.Students = this.StudentService.getAllStudents();
  }
  
  ngOnChanges(changes: SimpleChanges): void 
  {
    // this.EditForm = this.StudentService.showEditForm();
  }

  detailsID: number = 0;
  editID: number = 0;

  show(id: number) : void
  {
    this.detailsID = id;
    // this.StudentService.getStudentByID(id);
    // for (let i = 0; i < this.Students.length; i++) 
    // {
    //   if(this.Students[i].id == id)
    //   {
    //     this.DetailedStudent= this.Students[i];
    //   }
    // }
  }

  add(s: Student)
  {
    this.Students.push(new Student(s.id, s.name, s.age));
  }

  delete(id: number)
  {
    this.Students = this.StudentService.deleteStudent(id);
  }

  showEdit(ID: number)
  {
    this.StudentService.showEditForm(ID);
  }

}
