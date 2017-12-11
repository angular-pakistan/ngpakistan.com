import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [userService]
})
export class LoginComponent implements OnInit {

  email;
  password;
  errorMessage;

  constructor(private  userService: userService,private Router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe( data => {
      if(data.success) {
      this.userService.setUser(data.token);
      this.errorMessage = '';
      this.Router.navigate(['profile']);
      }else {
        this.errorMessage = 'Incorrect email or password!';
      }
    });
  }
}
