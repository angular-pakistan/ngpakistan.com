import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'meetups', loadChildren: './meetups/meetups.module.ts#MeetupsModule' },
  { path: 'conferences', loadChildren: './conferences/conferences.module.ts#ConferencesModule'},
  { path: 'projects', loadChildren: './projects/projects.module.ts#ProjectsModule'},
  { path: '**',    component: NoContentComponent },
];

