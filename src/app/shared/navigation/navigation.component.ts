import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  userService: UserService;

  constructor(private router: Router, userService: UserService) {
    this.userService = userService;
  }

  logout() {
    this.userService.clearUser();
    this.router.navigate(['home']);
  }

}
