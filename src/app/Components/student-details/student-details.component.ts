import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit, OnChanges
{
  constructor(public StudentService: StudentServiceService){}
  
  @Input({required: true}) id: number = 0;
  
  studentDetails: Student | null = new Student(0, "", 0);
  
  ngOnInit(): void 
  {
    this.studentDetails = this.StudentService.getStudentByID(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    this.studentDetails = this.StudentService.getStudentByID(this.id);
  }

}
