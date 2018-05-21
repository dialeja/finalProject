import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Employee } from './employee/model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  employeeForm:FormGroup;
  employee:Employee = {id:1,name:"algp",company:"alsdjhjsad",age:15};

  ngOnInit() {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl("", Validators.compose([Validators.required])),
      employeeCompany : new FormControl("", Validators.compose([Validators.email])),
      employeeAge: new FormControl("", Validators.compose([Validators.required]))
   });
  }
  onClickSubmit(){
    alert("entro");
  }

  onFormSubmit(){
    alert(this.employee.name);
  };

}
