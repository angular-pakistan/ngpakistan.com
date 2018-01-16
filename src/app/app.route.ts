import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { MeetupsComponent } from './meetups/meetups.component';
import { SignupComponent } from './signup';
import {
  MeetupCardComponent, ConferenceCardComponent, ProjectCardComponent,
  SocialCardComponent, PartnersComponent, ContactusCardComponent, JoinUsComponent
} from './shared/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'conferences', component: ConferenceCardComponent },
  { path: 'projects', component: ProjectCardComponent },
  { path: 'social', component: SocialCardComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactusCardComponent },
  { path: 'joinUs', component: JoinUsComponent },
  { path: 'presskit', loadChildren: './presskit/presskit.module.ts#PressKitModule'},
  { path: '**', component: NoContentComponent },
];

