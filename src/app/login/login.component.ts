import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operator/first';

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
  redirectionID;
  redirectionPath;
  showError = false;
  disableSubmit = false;
  loginBtnMsg = 'Login';
  constructor(
    private  userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.redirectionPath = this.route.snapshot.queryParams.redirection;
    this.redirectionID = this.route.snapshot.queryParams.id;
  }

  login() {
    this.showError = false;
    this.loginBtnMsg = 'Logging in...';
    this.disableSubmit = true;
    this.userService.login(this.email, this.password)
    .first()
    .subscribe( data => {
      this.loginBtnMsg = 'Login';
      if (data.token) {
        this.showError = false;
        this.userService.setUser(data.token);
        if (this.redirectionID && this.redirectionPath) {
          this.router.navigate([`${this.redirectionPath}/${this.redirectionID}`]);
        } else if (this.redirectionPath) {
          this.router.navigate([`${this.redirectionPath}`]);
        } else {
          this.router.navigate(['home']);
        }
      } else if (data.error) {
        this.errorMessage = data.error;
        this.showError = true;
        this.disableSubmit = false;
      }
    }, err => {
      this.loginBtnMsg = 'Login';
      this.disableSubmit = false;
      if (err) {
        this.errorMessage = 'Something went wrong, please try again.';
        this.showError = true;
      }
    });
  }

  resetError() {
    this.showError = false;
  }
}
