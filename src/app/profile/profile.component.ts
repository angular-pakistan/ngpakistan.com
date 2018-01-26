import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  User: User;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.User = this.userService.getUser();
  }
}