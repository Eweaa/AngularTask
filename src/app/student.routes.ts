import { Routes } from "@angular/router";
import { AddStudentComponent } from "./Student/add-student/add-student.component";
import { StudentDetailsComponent } from "./Student/student-details/student-details.component";
import { StudentComponent } from "./Student/student-list/student-list.component";
import { EidtStudentComponent } from "./Student/edit-student/edit-student.component";

export const studentRoutes: Routes = 
[
    { path: "", component: StudentComponent },
    { path: "add", component: AddStudentComponent },
    { path: "details/:id", component: StudentDetailsComponent },
    { path: "edit/:id", component: EidtStudentComponent },
];