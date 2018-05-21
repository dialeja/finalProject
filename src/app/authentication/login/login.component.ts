import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authenticationService: AuthenticationService) { }
  username:string;
  pass:string;  
  loginForm:FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  login(){
    
    this.authenticationService.login(this.username,this.pass);
    if(!this.authenticationService.islogged){
      alert("login failed");
    }else{
      this.router.navigate(['home']);
    }
    
  };

}
