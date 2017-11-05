import { Component, OnInit } from '@angular/core';
import { user } from '../model/user.interface';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  password2= null;

  User: user= {
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

  
  constructor(private UserService: UserService) { }

  ngOnInit() {
    console.log(this.User);
  }

  signup(){
    this.UserService.save(this.User).subscribe( data => {
      console.log(data);
    });
  }
}
