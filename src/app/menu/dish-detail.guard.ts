import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DishDetailGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    let id = +next.paramMap.get('id')
    if (isNaN(id) || id < 0) {
      //do not activate the router!!
      this._router.navigate(['/menu'])
      return false
    }
    //router can go next
    return true;
  }
}