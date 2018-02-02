import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(): boolean {
    return !this.userService.getUser();
  }
}
