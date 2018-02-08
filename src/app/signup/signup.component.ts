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
  success = false;
  showErrorMessage = false;
  errorMessage = '';
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
        this.success = true;
      }
      if (data.error) {
        this.disable = false;
        this.errorMessage = data.error;
        this.showErrorMessage = true;
      }
    }, err => this.disable = false);
  }
}
