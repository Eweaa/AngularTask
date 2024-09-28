import { Component,model,OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../Services/department-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})

export class DepartmentListComponent implements OnInit {

  constructor(public departmentService: DepartmentService, public router: Router){}
  
  modal: boolean = false;
  delModal: boolean = false;
  detailModal: boolean = false;
  editModal: boolean = false;

  departments:Array<Department> = [];
  deptDetails:Department = new Department(0, "", "mansoura", false);
  editedDepartment: Department = new Department(0, "", "mansoura", false);
  newDept = new Department(0, "", "mansoura", false);

  sub: Subscription | null = null;

  ngOnInit():void
  {
    this.sub = this.departmentService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.departments = data;
      }
    })
  }


  showModal = () => this.modal = !this.modal;
  showDeleteModal = () => this.delModal = !this.delModal;
  ShowdetailsModal = () => this.detailModal = !this.detailModal;
  ShoweditModal = () => this.editModal = !this.editModal;


  add()
  {
    this.sub = this.departmentService.add(this.newDept).subscribe({
      next: d => {
        this.showModal();
        this.departments.push(this.newDept);
      }
    })
  }

  deleteModal(id: number)
  {
    this.sub = this.departmentService.getById(id).subscribe({
      next: data => {
        this.showDeleteModal();
        this.deptDetails = data;
      }
    })
  }

  delete(id: number)
  {
    this.sub = this.departmentService.deleteById(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate([`/department`])})
      }
    })
  }


  detailsModal(id: number)
  {
    this.sub = this.departmentService.getById(id).subscribe({
      next: data => {
        this.ShowdetailsModal();
        this.deptDetails = data;
      }
    })
  }

  startEdit(id: number)
  {
    this.sub = this.departmentService.getById(id).subscribe({
      next: data => {
        this.ShoweditModal();
        this.editedDepartment = data;
      }
    })
  }

  edit()
  {
    this.sub = this.departmentService.edit(this.editedDepartment).subscribe({
      next: () => {
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate([`/department`])})
      }
    })
  }
  
}