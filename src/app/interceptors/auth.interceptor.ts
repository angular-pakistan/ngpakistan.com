import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: this.userService.getToken() || ''
      }
    });
    return next.handle(request);
  }
}
