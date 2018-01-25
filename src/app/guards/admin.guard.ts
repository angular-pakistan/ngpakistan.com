import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { userService } from '../services/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private userService: userService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const user = this.userService.getUser();
      if(user)
        return user.isAdmin;
      return false;
  }
}