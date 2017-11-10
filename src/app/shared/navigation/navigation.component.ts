import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  nameHover= 'btn-trial';
  userName= '';
  loggedIn= false;
  constructor(private router: Router) { }
  showOptions() {
    this.nameHover = 'btn-trial';
  }
  hideOptions(){
    this.nameHover = '';
  }

  ngOnInit() {
    if(localStorage.getItem('isLoggedin')){
      this.userName = JSON.parse(localStorage.getItem('user')).name;
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn=false;
  }

}
