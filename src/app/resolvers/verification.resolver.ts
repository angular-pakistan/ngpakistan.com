import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UserService } from '../services/user.service';

@Injectable()
export class VerificationResolver implements Resolve<Observable<any>> {
  constructor(private service: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    const id = route.params.id;
    return this.service.verify(`${id}`);
  }
}
