import { Component, OnInit } from '@angular/core';
import {user } from '../model/user.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  User: user;
  constructor(private UserService: UserService) {}
  ngOnInit() {
    this.User = this.UserService.getUser().user;
  }
}
