import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { NoContentComponent } from '../no-content';
import { MeetupsResolver } from '../resolvers/meetups.resolver';
import { MeetupResolver } from '../resolvers/meetup.resolver';
export const routes = [
  {
    path: 'admin', children: [
    { path: '', component: AdminComponent },
    { path: 'meetups', children: [
        { path: '', component: ManageMeetupsComponent, resolve: { response: MeetupsResolver }},
        { path: 'edit/:id', component: EditMeetupComponent, resolve: { response: MeetupResolver } }
    ]},
    { path: '**', component: NoContentComponent }
  ]
  }
];
