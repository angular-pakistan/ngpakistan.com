import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

<<<<<<< HEAD
  nameHover= 'btn-trial';
  constructor(private router: Router, private UserService: UserService) { }
  showOptions() {
    this.nameHover = 'btn-trial';
  }
  hideOptions(){
    this.nameHover = '';
  }
=======
  constructor() { }

>>>>>>> parent of 7a71e7d... jwt authentication added , user stored in service and other fixes
  ngOnInit() {
  }

}
