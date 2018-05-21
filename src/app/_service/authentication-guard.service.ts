import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate,CanLoad{

  constructor(private authenticationService:AuthenticationService, private router:Router) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log("Can activate");
    if(this.authenticationService.islogged){
      return true;
   }
   this.router.navigate(['']);
  }

  canLoad(){
    return false;
  }
}
