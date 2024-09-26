import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  editShow: boolean = false;

  private StudentList: Array<Student> = 
  [
    new Student(1, 'John Doe', 20),
    new Student(2, 'Jane Smith', 22),
    new Student(3, 'Bob Johnson', 19),
    new Student(4, 'Alice Brown', 21),
    new Student(5, 'Tom Clark', 23),
    new Student(6, 'Emily Davis', 18),
    new Student(7, 'Michael Wilson', 20),
    new Student(8, 'Olivia Martinez', 22),
    new Student(9, 'David Lee', 21),
    new Student(10, 'Sophia Garcia', 19),
  ];

  DetailedStudent: Student | null = null;
  EditedStudent: Student | null = null;

  getAllStudents()
  {
    return this.StudentList;
  }

  getStudentByID(ID: number) : Student | null
  {
    for (let i = 0; i < this.StudentList.length; i++) 
      {
        if(this.StudentList[i].id == ID)
        {
          this.DetailedStudent = this.StudentList[i];
          return this.StudentList[i];
        }
      }
      return null;
  }

  getStudentByIDD(ID: number) : Student | null
  {
    for (let i = 0; i < this.StudentList.length; i++) 
      {
        if(this.StudentList[i].id == ID)
        {
          this.EditedStudent = this.StudentList[i];
          return this.StudentList[i];
        }
      }
      return null;
  }

  addStudent(student: Student) : void
  {
    this.StudentList.push(student);
  }

  deleteStudent(ID: number)
  {
    this.StudentList = this.StudentList.filter(s => s.id != ID);
    console.log(this.StudentList)
    return this.StudentList;
  }

  showEditForm(ID: number)
  {
    this.editShow = !this.editShow;
    this.getStudentByIDD(ID)
  }

  edit(Std: Student)
  {
    for (let i = 0; i < this.StudentList.length; i++) 
      {
        // debugger
        if(this.StudentList[i].id == this.EditedStudent?.id)
        {
          this.StudentList[i].id = Std.id;
          this.StudentList[i].name = Std.name;
          this.StudentList[i].age = Std.age;
        }
      }
      console.log(this.StudentList);
      
      return null;
  }

}
