import { Component, OnInit } from '@angular/core';
import {user } from '../model/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  User: user= JSON.parse(localStorage.getItem('user'));
  constructor() { }
  ngOnInit() {
     this.User= JSON.parse(localStorage.getItem('user'));
  }
}
