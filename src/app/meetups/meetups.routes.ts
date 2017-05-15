import { MeetupsComponent } from './meetups.component';

export const routes = [
  {
    path: '', children: [
    { path: '', component: MeetupsComponent }
  ]
  }
];
