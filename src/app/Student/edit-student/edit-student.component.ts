import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentServiceService } from '../../Services/student-service.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EidtStudentComponent implements OnInit, OnChanges
{
  constructor(public StudentService: StudentServiceService, public activatedRoute: ActivatedRoute, public router: Router){}
  
  EditedStudent: Student = new Student(0, "", 0, "");
  sub: Subscription | null = null;
  
  ngOnInit(): void 
  {
    this.sub = this.activatedRoute.params.subscribe(p=>{
      this.StudentService.getStudentByID(p['id']).subscribe({
        next: data => {
          console.log(data);
          this.EditedStudent = data;
        }
      })
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void 
  {
    throw new Error('Method not implemented.');
  }

  edit()
  {
    this.sub = this.StudentService.edit(this.EditedStudent).subscribe({
      next: () => {
        this.router.navigateByUrl('student');
      }
    })
  }

  // Save()
  // {
  //   this.StudentService.addStudent(this.newStudent);
  // }


}
