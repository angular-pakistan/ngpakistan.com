import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable()
export class VerificationResolver implements Resolve<Observable<any>> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    const email = route.queryParams.email;
    const token = route.queryParams.token;
    return this.userService.verify(`${email}`, `${token}`);
  }
}
