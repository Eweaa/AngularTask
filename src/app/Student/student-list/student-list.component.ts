import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { AddStudentComponent } from "../add-student/add-student.component";
import { StudentServiceService } from '../../Services/student-service.service';
import { EidtStudentComponent } from "../edit-student/edit-student.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { studentRoutes } from '../../student.routes';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent, EidtStudentComponent, CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentComponent implements OnInit
{
  constructor(public StudentService: StudentServiceService, public router: Router){}
  Students : Array<Student> = [];
  DetailedStudent: Student = new Student(0, "", 0, "");
  sub: Subscription | null = null;

  EditForm: boolean = false;
  
  ngOnInit(): void 
  {
    this.sub = this.StudentService.getAllStudents().subscribe({
      next: data => {
        this.Students = data;
      }
    })
  }

  detailsID: number = 0;
  editID: number = 0;

  show(id: number) : void
  {
    this.detailsID = id;
  }

  details(id: number)
  {
    this.router.navigateByUrl(`student/details/${id}`)
  }

  create()
  {
    this.router.navigateByUrl('student/add')
  }

  add(s: Student)
  {
    this.Students.push(new Student(s.id, s.name, s.age, s.adddress));
  }

  delete(id: number)
  {
    this.sub = this.StudentService.deleteStudent(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate([`/student`])})
      }
    })
  }

  showEdit(ID: number)
  {
    this.router.navigateByUrl(`student/edit/${ID}`)
  }

}
