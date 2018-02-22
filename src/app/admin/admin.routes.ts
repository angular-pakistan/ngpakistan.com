import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { AddMeetupComponent } from './add-meetup/add-meetup.component';
import { NoContentComponent } from '../no-content';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { ManageSpeakersComponent } from './manage-speakers/manage-speakers.component';
import { ManageSubscribersComponent } from './manage-subscribers/manage-subscribers.component';

import { MeetupsResolver } from '../resolvers/meetups.resolver';
import { MeetupResolver } from '../resolvers/meetup.resolver';
import { SpeakersResolver } from '../resolvers/speakers.resolver';
import { SpeakerResolver } from '../resolvers/speaker.resolver';
import { SubscribersResolver } from '../resolvers/subscribers.resolver';
import { AdminGuard } from '../guards/admin.guard';
export const routes = [
  {
    path: 'admin', children: [
    { path: '', component: AdminComponent },
    { path: 'meetups', children: [
        { path: '', component: ManageMeetupsComponent, resolve: { meetups: MeetupsResolver }},
        { path: ':id/subscribers', component: ManageSubscribersComponent, resolve: { subscribers: SubscribersResolver }},
        { path: 'edit/:id', component: EditMeetupComponent, resolve: { meetup: MeetupResolver, speakers: SpeakersResolver } },
        { path: 'add', component: AddMeetupComponent, resolve: { speakers: SpeakersResolver } }
    ]},
    { path: 'speakers', children: [
        { path: '', component: ManageSpeakersComponent, resolve: { speakers: SpeakersResolver }},
        { path: 'edit/:id', component: EditSpeakerComponent, resolve: { speaker: SpeakerResolver } },
        { path: 'add', component: AddSpeakerComponent }
    ]},
    { path: '**', component: NoContentComponent }
  ], canActivate: [AdminGuard]
  }
];
