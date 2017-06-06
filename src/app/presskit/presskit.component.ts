import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './presskit.component.html',
  styleUrls: ['./presskit.component.css']
})
export class PressKitComponent implements OnInit {

  pressKitLogo = '../../assets/img/angular-pakistan-logo-presskit.png';

  constructor() { }

  ngOnInit() {
  }

}
