import { Component, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../_service/employee.service';
import { Project } from '../../model/project';
import { ProjectService } from '../../_service/project.service';



@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor( 
      private router: Router, 
      private employeeService: EmployeeService, 
      private route: ActivatedRoute, 
      private projectService:ProjectService
    ) { }

  projects:Project[];
  oldproject:String;
  selectedEmployeeId:string= null;
  employeeForm:FormGroup;
  employee:Employee = {id:null,name:"",age:null,company:""};
  date:Date;

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => this.projects = data);

    this.employeeForm = new FormGroup({
      employeeName: new FormControl("", Validators.compose([Validators.required])),
      employeeCompany : new FormControl("", Validators.compose([Validators.required])),
      employeeAge: new FormControl("", Validators.compose([Validators.required])),
      employeeBirthday: new FormControl("", Validators.compose([Validators.required])),
      favoriteColor: new FormControl("", Validators.compose([Validators.required])),
      project: new FormControl("", Validators.compose([Validators.required])),
    });

    this.route.params.subscribe(
      data => {
        console.log(data)
        if(data && data.id){
          this.selectedEmployeeId = data.id;
          this.employeeService.getEmployee(this.selectedEmployeeId).subscribe(data => {
            this.employee = data;
            this.date =data.birthday;
            this.oldproject = data.project
          });
          
        }else{
          this.selectedEmployeeId = null;
        }
      }
    );
  }

  save():void {
    console.log("old Project"+this.oldproject);
    if(this.selectedEmployeeId){
      this.employeeService.editEmployee(this.employee).subscribe(data => console.log(data));
      let project:Project = this.projects.find(p => p.name === this.employee.project);
      let oldProject2:Project = this.projects.find(p => p.name === this.oldproject);
      let newSize:number;
      let newSizeOld:number ;
      console.log("Projects"+JSON.stringify(this.projects));
      console.log("old Project"+oldProject2);
      console.log("Project"+project);
      newSize = project.teamSize.valueOf()+1;
      project.teamSize = newSize;
      newSizeOld = oldProject2.teamSize.valueOf()-1;
      oldProject2.teamSize = newSizeOld;
      this.projectService.editProject(project).subscribe(data => console.log(data));
      this.projectService.editProject(oldProject2).subscribe(data => console.log(data));
      this.router.navigate(['/employee/list']);
    }else{
      this.employee.id = Date.now();
      this.employeeService.addEmployee(this.employee).subscribe(data => console.log(data));
      let project:Project = this.projects.find(p => p.name === this.employee.project);
      let newSize:number ;
      newSize = project.teamSize.valueOf()+1;
      project.teamSize = newSize;
      console.log("ol project "+ this.oldproject);
      this.projectService.editProject(project).subscribe(data => console.log(data));
      this.router.navigate(['/employee/list']);
    }

  };

  cancel(){
    this.router.navigate(['/employee/list']);
  }

  customValidator(control:FormControl){
    return null;
  }
  addEvent(type, date){
    console.log(date.value);
    this.employee.birthday= date.value;
    
  }

}
