import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  currentMeetup = '../../../assets/img/meetup-3-banner.png';
  prevMeetup = [
    {
      name: 'Meetup 2',
      location: '10Pearls, Karachi'
    },
    {
      name: 'Meetup 1',
      location: 'Attribe Solutions, Karachi'
    }
  ];
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
  socials = [
    {
      platform: 'Faecbook',
      details: [
        '3000+ active users'
      ],
      icon: 'fa fa-facebook-official'
    },
    {
      platform: 'Twitter',
      details: [
        '400+ active users'
      ],
      icon: 'fa fa-twitter'
    },
    {
      platform: 'Github',
      details: [
        '5+ active projects'
      ],
      icon: 'fa fa-github'
    }
  ];

  partners = [
    {
      name: 'Attribe Solutions',
      logo: 'assets/img/logo-attribe-solutions.png',
      web: 'http://attribes.com/'
    },
    {
      name: '10Pearls',
      logo: 'assets/img/logo-10pearls.png',
      web: 'https://10pearls.com/'
    },
    {
      name: 'Folio3',
      logo: 'assets/img/logo-folio3.jpeg',
      web: 'http://www.folio3.com/'
    }
  ];
}
