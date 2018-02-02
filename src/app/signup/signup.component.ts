import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  confirmPassword = '';
  disable = false;
  user: User = {
    name: '',
    email: '',
    phone: '',
    github: '',
    password: ''
  };

  constructor(private userService: UserService, private Router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.disable = true;
    this.userService.save(this.user).subscribe( data => {
      if (data.success) {
        this.userService.setUser(data.token);
        this.Router.navigate(['home']);
        window.location.reload();
      }
    }, err => this.disable = false);
  }
}
