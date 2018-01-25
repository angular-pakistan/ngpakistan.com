import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user;
  canLogin: boolean = true;
  showAdminMenu: boolean = false;
  
  constructor(private router: Router, private userService: userService) { }
  
  ngOnInit() {
    this.user = this.userService.getUser();
    if(this.user){
      this.canLogin = false;
      if(this.user.isAdmin)
        this.showAdminMenu = true;
    }
  }

  logout() {
    this.userService.clearUser();

  }

}