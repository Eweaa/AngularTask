import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(public http: HttpClient) { }

  editShow: boolean = false;
  url: string = "https://localhost:7020/api/Student";

  DetailedStudent: Student | null = null;
  EditedStudent: Student | null = null;

  getAllStudents = () => this.http.get<Array<Student>>(this.url);
  
  getStudentByID = (ID: number) =>  this.http.get<Student>(`${this.url}/${ID}`)
  
  deleteStudent = (ID: number) => this.http.delete(`${this.url}/${ID}`);

  addStudent(student: Student)
  {
    return this.http.post<Student>(this.url, student);
  }


  edit(Std: Student)
  {
    return this.http.put<Student>(`${this.url}/${Std.id}`, Std);
  }

}
