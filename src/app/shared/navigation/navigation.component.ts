import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  nameHover= 'btn-trial';

  constructor(private router: Router, private userService: userService) { }
  showOptions() {
    this.nameHover = 'btn-trial';
  }
  hideOptions(){
    this.nameHover = '';
  }
  ngOnInit() {
  }

  logout() {
    this.userService.clearUser();

  }

}