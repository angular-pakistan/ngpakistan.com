import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { userService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [userService]
})
export class ProfileComponent implements OnInit {

  User: User;
  constructor(private userService: userService) {}
  ngOnInit() {
    this.User = this.userService.getUser().user;
  }
}