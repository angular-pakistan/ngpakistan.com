import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { Router } from '@angular/router';

import { userService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [userService]
})
export class SignupComponent implements OnInit {

  password2= null;

  User: User= {
    name: '',
    email1: '',
    email2: '',
    phone1: '',
    phone2: '',
    dob: '',
    github: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    password: ''
  };

  constructor(private userService: userService, private Router: Router) { }

  ngOnInit() {
  }

  signup(){
    this.userService.save(this.User).subscribe( data => {
      if (data.data) {
        this.Router.navigate(['login']);
      }
    });
  }
}