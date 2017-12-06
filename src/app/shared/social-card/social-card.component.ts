import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent {

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

}
