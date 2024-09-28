import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(public http: HttpClient) { }

  url: string = "https://localhost:7020/api/Departments";
  showAdd:boolean=false;
  selectedDepartment:Department | null=null;

  getAll()
  {
    return this.http.get<Array<Department>>(this.url);
  }

  add(dept:Department)
  {
    return this.http.post<Department>(this.url, dept);
  }

  getById(id:number)
  {
    return this.http.get<Department>(`${this.url}/${id}`)
  }
  
  deleteById(id:number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(dept:Department)
  {
    return this.http.put<Department>(`${this.url}/${dept.id}`, dept);
  }

}