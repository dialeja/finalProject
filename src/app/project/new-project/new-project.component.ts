import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../_service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor( private router: Router, private projectService: ProjectService, private route: ActivatedRoute) { }

  selectedProjectId:string= null;
  projectForm:FormGroup;
  project:Project = {id:null,name:"",teamSize:0,customer:""};

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl("", Validators.compose([Validators.required])),
      projectTeamSize : new FormControl(0, Validators.compose([Validators.required])),
      projectCustomer: new FormControl("", Validators.compose([Validators.required]))
    });
    this.projectForm.controls.projectTeamSize.disable();
    this.route.params.subscribe(
      data => {
        console.log(data)
        if(data && data.id){
          this.selectedProjectId = data.id;
          this.projectService.getProject(this.selectedProjectId).subscribe(data => this.project = data);
        }else{
          this.selectedProjectId = null;
        }
      }
    );
  }

  save():void {
    if(this.selectedProjectId){
      this.projectService.editProject(this.project).subscribe(data => console.log(data));
      this.router.navigate(['/project/list']);
    }else{
      this.project.id = Date.now();
      this.projectService.addProject(this.project).subscribe(data => console.log(data));
      this.router.navigate(['/project/list']);
    }

  };

  cancel(){
    this.router.navigate(['/project/list']);
  }
}
