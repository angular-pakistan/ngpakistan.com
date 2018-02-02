import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { MeetupsComponent } from './meetups/meetups.component';
import { SignupComponent } from './signup';
import { ProfileComponent } from './profile';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import {
  MeetupCardComponent, ConferenceCardComponent, ProjectCardComponent,
  SocialCardComponent, PartnersComponent, ContactusCardComponent, JoinUsComponent
} from './shared/index';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'conferences', component: ConferenceCardComponent },
  { path: 'projects', component: ProjectCardComponent },
  { path: 'social', component: SocialCardComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactusCardComponent },
  { path: 'joinUs', component: JoinUsComponent },
  { path: 'presskit', loadChildren: './presskit/presskit.module.ts#PressKitModule'},
  { path: '**', component: NoContentComponent },
];

