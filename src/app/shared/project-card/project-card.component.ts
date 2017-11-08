import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  projects = [
    {
      image: 'assets/img/project-angular-pakistan.png',
      name: 'Angular Pakistan Website',
      details: 'The official Angular Pakistan website'
    },
    {
      image: 'assets/img/project-angular-io-in-urdu.png',
      name: 'Angular.io in Urdu',
      details: 'Angular.io localization project in Urdu'},
    {
      image: 'assets/img/project-conf-resource-hub.png',
      name: 'Conf Resource Hub',
      details: 'A open source project to help open source conferences manage speaker resources including presentation links,' +
      ' resources pointed by speakers etc.'}
  ];

}
