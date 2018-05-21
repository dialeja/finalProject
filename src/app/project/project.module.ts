import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeModule } from '../home/home.module';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule, 
    MatPaginatorModule,
    MatCardModule
  ],
  exports:[ProjectComponent,ProjectListComponent,NewProjectComponent],
  declarations: [ProjectComponent, ProjectListComponent, NewProjectComponent],
  bootstrap:[ProjectComponent]
})
export class ProjectModule { }
