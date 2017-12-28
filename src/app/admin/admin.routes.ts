import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { NoContentComponent } from '../no-content';
export const routes = [
  {
    path: 'admin', children: [
    { path: '', component: AdminComponent },
    { path: 'meetups', children: [
        { path: '', component: ManageMeetupsComponent},
        { path: 'edit/:id', component: EditMeetupComponent }
    ]},
    { path: ':id', component: EditMeetupComponent },
    { path: '**', component: NoContentComponent }
  ]
  }
];
