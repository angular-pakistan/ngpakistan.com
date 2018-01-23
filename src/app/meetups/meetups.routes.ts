import { MeetupsComponent } from './meetups.component';
import { MeetupCardComponent } from '../shared/meetup-card/meetup-card.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';
import { MeetupsResolver } from '../resolvers/meetups.resolver';
import { MeetupResolver } from '../resolvers/meetup.resolver';
import { SpeakersResolver } from '../resolvers/speakers.resolver';

export const routes = [
  {
    path: 'meetups', children: [
    { path: '', component: MeetupCardComponent },
    { path: 'all', component: MeetupsComponent, resolve: { response: MeetupsResolver } },
    { path: ':id', component: MeetupDetailComponent, resolve: { meetup: MeetupResolver } }
  ]
  }
];
