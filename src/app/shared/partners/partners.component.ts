import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent{

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
    },
    {
      name: 'Recurship',
      logo: 'assets/img/logo-recurship.png',
      web: 'http://recurship.com/'
    }
  ];

}
