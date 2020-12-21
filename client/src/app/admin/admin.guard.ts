import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _auth:AuthService, private _router:Router) { }

  canActivate(): boolean {
    if (this._auth.getToken() == 'adminPower'){
      console.log('true');
      return true;
    } else{
      alert("You don't have ADMIN privilege");
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
