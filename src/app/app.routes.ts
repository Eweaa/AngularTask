import { Routes } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DepartmentListComponent } from './Department/department-list/department-list.component';
import { ContactUsComponent } from './ContactUs/contact-us/contact-us.component';
import { canloginGuard } from './guards/canlogin.guard';

export const routes: Routes = 
[
    { path: '', component: SecondComponentComponent },
    { path: 'student', loadChildren:() => import('./student.routes').then(a => a.studentRoutes) },
    { path: 'department', component: DepartmentListComponent },
    { path: 'ContactUs', component: ContactUsComponent, canActivate:[canloginGuard] },
];
