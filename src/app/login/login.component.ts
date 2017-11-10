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

  constructor(private  UserService: UserService,private Router:Router) { }

  ngOnInit() {
  }

  login(){
    this.UserService.login(this.email, this.password).subscribe( data => {
      console.log(data.data);
      if(data.data) {
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('user', JSON.stringify(data.data));
      window.location.reload();
      this.Router.navigate(['/profile']);
      this.errorMessage = '';
      }else {
        this.errorMessage = 'Incorrect email or password!';
      }
    });
  }
}
