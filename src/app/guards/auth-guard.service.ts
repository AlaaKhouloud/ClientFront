import { Injectable } from '@angular/core';
import { Router , CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
    if(localStorage.getItem('currentUser'))
    {
      return true;
    }
    else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
