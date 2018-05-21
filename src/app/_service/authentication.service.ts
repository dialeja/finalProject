import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  islogged:Boolean = false;
  constructor(private router:Router) { }

login(username:string, pass:string){
  if(username === "admin" && pass === "admin"){
    this.islogged = true;
  }else{
    this.islogged = false;
  }
}

logout(){
 
    this.islogged = false;
    this.router.navigate(['']);

}

}
