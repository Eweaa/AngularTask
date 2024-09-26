import { Routes } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { StudentComponent } from './Components/student/student.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';

export const routes: Routes = 
[
    { path: '', component: SecondComponentComponent },
    { path: 'student', component: StudentComponent },
    { path: 'department', component: DepartmentListComponent },
];
