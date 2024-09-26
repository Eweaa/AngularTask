import { Component,OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {
  departments:Department[]=[];
  deptDetails:Department=this.departments[0];
  newDept=new Department(0,"","mansoura",false);
  add(){
    this.departments.push(new Department(this.newDept.id,this.newDept.name,this.newDept.loc,this.newDept.status));
    this.newDept=new Department(0,"","mansoura",false);
  }
  constructor(){

  }
  ngOnInit():void{
    this.departments=[
      new Department(1,"sd","smart",true),
      new Department(2,"el","alex",true),
      new Department(3,"os","mansoura",true)
    ]
    this.deptDetails=this.departments[0];
  }
  Show(id:number){
    for (let i = 0; i < this.departments.length; i++) {
      if(this.departments[i].id==id){
        this.deptDetails=this.departments[i];
        break;
      }
      
    }
  }
}