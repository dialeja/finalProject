import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeComponent } from '../employee/new-employee/new-employee.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { LoginComponent } from '../authentication/login/login.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { EmployeeComponent } from '../employee/employee/employee.component';
import { MainComponent } from '../home/main/main.component';
import { ProjectComponent } from '../project/project/project.component';
import { ProjectListComponent } from '../project/project-list/project-list.component';
import { NewProjectComponent } from '../project/new-project/new-project.component';
import { AuthenticationGuardService } from '../_service/authentication-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent } ,
  { path: 'employee', component:EmployeeComponent ,  canActivate: [AuthenticationGuardService], children:[
    { path: 'list', component: EmployeeListComponent },
    { path: 'detail', component: NewEmployeeComponent },
    { path: 'new', component: NewEmployeeComponent },
    { path: '', component: EmployeeComponent },
    { path: 'list/:id/editar', component: NewEmployeeComponent },
  ]},
  { path: 'project', component:ProjectComponent ,  canActivate: [AuthenticationGuardService],  children:[
    { path: 'list', component: ProjectListComponent },
    { path: 'detail', component: NewProjectComponent },
    { path: 'new', component: NewProjectComponent },
    { path: '', component: ProjectComponent },
    { path: 'list/:id/editar', component: NewProjectComponent }
  ]},
  { path: 'home', component: MainComponent ,  canActivate: [AuthenticationGuardService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
