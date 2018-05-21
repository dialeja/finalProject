import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Employee } from '../model/employee';
import {MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort} from '@angular/material';
import { EmployeeService } from '../../_service/employee.service';
import { ModalComponent } from '../../componenets/modal/modal.component';
import { ProjectService } from '../../_service/project.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [ 'name','company','age','birthday','favoriteColor','project','options'];
  data2:any;

  employees:Employee[];

  dataSource = new MatTableDataSource(this.employees);
  employee:Employee = {id:2,name:"Diana",company:"Todo1",age:29};
  projects:Project[];

  constructor(private employeeService: EmployeeService, public dialog: MatDialog, private projectService:ProjectService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
     // console.log(data);
      this.employees=data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.projectService.getProjects().subscribe(data => this.projects = data);
    /*if(employee){
      employee.id = this.employees.length+1;
      this.employees.push(employee);
    }*/
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    
  }

  openDialog(employee): void {
    console.log(employee);
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: employee.name, title: " Desea Eliminar ?" ,id:employee.id , project:employee.project}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.employeeService.removeEmployee(result.id).subscribe(
        data => {
          this.employeeService.getEmployees().subscribe(data => {
            this.employees = data;
            this.dataSource = new MatTableDataSource(this.employees);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          });
          let oldProject:Project= this.projects.find(p => p.name === result.project);
          let newSize:number = oldProject.teamSize.valueOf()-1;
          oldProject.teamSize = newSize;
          this.projectService.editProject(oldProject).subscribe(data => console.log(data));
        }
      );
    });
  }

}