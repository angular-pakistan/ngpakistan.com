import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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

  constructor(private  UserService: UserService,private Router: Router) { }

  ngOnInit() {
  }

  login() {
    this.UserService.login(this.email, this.password).subscribe( data => {
      if(data.success) {
      this.UserService.setUser(data.token);
      this.errorMessage = '';
      this.Router.navigate(['profile']);
      }else {
        this.errorMessage = 'Incorrect email or password!';
      }
    });
  }
}
