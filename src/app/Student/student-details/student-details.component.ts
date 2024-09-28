import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit
{
  constructor(public StudentService: StudentServiceService, public activatedRoute: ActivatedRoute){}

  sub: Subscription | null = null;
  studentDetails: Student | null = new Student(0, "", 0, "");
  
  ngOnInit():void
  {
    this.sub = this.activatedRoute.params.subscribe(p=>{
      this.StudentService.getStudentByID(p['id']).subscribe({
        next: data => {
          console.log(data);
          this.studentDetails = data;
        }
      })
    });
  }
}
