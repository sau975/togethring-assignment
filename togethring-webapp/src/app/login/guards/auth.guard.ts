import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if(!this.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    return this.isLoggedIn();
  }

  public isLoggedIn(): boolean {
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
}
