import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { AddMeetupComponent } from './add-meetup/add-meetup.component';
import { SpeakerFormComponent } from './speaker-form/speaker-form.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { ManageSpeakersComponent } from './manage-speakers/manage-speakers.component';

import { AdminGuard } from '../guards/admin.guard';
import { MeetupsModule } from '../meetups/meetups.module';
import { MeetupsResolver } from '../resolvers/meetups.resolver';
import { MeetupResolver } from '../resolvers/meetup.resolver';
import { SpeakerResolver } from '../resolvers/speaker.resolver';
import { SpeakersResolver } from '../resolvers/speakers.resolver';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    ManageMeetupsComponent,
    ManageMeetupsComponent,
    EditMeetupComponent,
    MeetupFormComponent,
    AddMeetupComponent,
    SpeakerFormComponent,
    AddSpeakerComponent,
    EditSpeakerComponent,
    ManageSpeakersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MeetupsModule
  ],
  providers: [
    MeetupsResolver,
    MeetupResolver,
    SpeakersResolver,
    SpeakerResolver,
    AdminGuard
  ]
})
export class AdminModule {
  public static routes = routes;
}
