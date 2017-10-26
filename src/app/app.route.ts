import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'meetups', loadChildren: './meetups/meetups.module.ts#MeetupsModule' },
  { path: 'conferences', loadChildren: './conferences/conferences.module.ts#ConferencesModule'},
  { path: 'projects', loadChildren: './projects/projects.module.ts#ProjectsModule'},
  { path: 'presskit', loadChildren: './presskit/presskit.module.ts#PressKitModule'},
  { path: '**',    component: NoContentComponent },
];

