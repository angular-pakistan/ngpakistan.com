import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges{
  user;
  canLogin = true;
  showAdminMenu = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    if (this.user) {
      this.canLogin = false;
      if (this.user.admin) {
        this.showAdminMenu = true;
      }
    }
  }

  ngOnChanges() {
    if (this.userService.getUser()) {
      this.canLogin = false;
    } else {
      this.canLogin = true;
    }
  }

  logout() {
    this.userService.clearUser();
    this.canLogin = true;
    this.showAdminMenu = false;
  }

}
