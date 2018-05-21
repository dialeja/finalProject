import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Project } from '../../model/project';
import { ModalComponent } from '../../componenets/modal/modal.component';
import { ProjectService } from '../../_service/project.service';
import { EmployeeService } from '../../_service/employee.service';
import { Employee } from '../../employee/model/employee';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {


  @ViewChild(MatPaginator ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name','teamSize','customer','options'];
  data2:any;

  projects:Project[];

  dataSource = new MatTableDataSource(this.projects);
  employee:Project = {id:2,name:"Diana",teamSize:15,customer:"BC"};
  
  constructor(private projectService: ProjectService, public dialog: MatDialog, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      console.log(data);
      this.projects=data;
      let sizeofTeam = 0;
      this.dataSource = new MatTableDataSource(this.projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
      data: { name: employee.name, title: " Desea Eliminar ?" ,id:employee.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.projectService.removeProject(result).subscribe(
        data => {
          this.projectService.getProjects().subscribe(data => {
            this.projects = data;
            this.dataSource = new MatTableDataSource(this.projects);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          });
        }
      );
    });
  }

}
