import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import  {MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../_service/employee.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../in-memory-data.service';
import { HomeModule } from '../home/home.module';

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
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  exports: [EmployeeComponent],
  declarations: [EmployeeListComponent, NewEmployeeComponent, EmployeeComponent],
  bootstrap:[EmployeeComponent],
  providers:[EmployeeService]
})
export class EmployeeModule { }
