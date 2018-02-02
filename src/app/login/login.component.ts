import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  email;
  password;
  errorMessage;
  showError = false;
  disable = false;
  loginBtnMsg = 'Login';
  constructor(private  userService: UserService,private Router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginBtnMsg = 'Logging in...';
    this.disable = true;
    this.userService.login(this.email, this.password)
    .first()
    .subscribe( data => {
      this.loginBtnMsg = 'Login';
      this.disable = false;
      if (data.token) {
      this.showError = false;
      this.userService.setUser(data.token);
      this.Router.navigate(['profile']);
      window.location.reload();
      } else {
        this.errorMessage = 'Something went wrong, please try again.';
        this.showError = true;
      }
    }, err => {
      this.loginBtnMsg = 'Login';
      this.disable = false;
      if (err) {
        this.errorMessage = 'Invalid username or password.';
        this.showError = true;
      }
    });
  }
}
