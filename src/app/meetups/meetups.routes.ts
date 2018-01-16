import { MeetupsComponent } from './meetups.component';
import { MeetupCardComponent } from '../shared/meetup-card/meetup-card.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';

export const routes = [
  {
    path: 'meetups', children: [
    { path: '', component: MeetupCardComponent },
    { path: 'all', component: MeetupsComponent },
    { path: ':id', component: MeetupDetailComponent }
  ]
  }
];
