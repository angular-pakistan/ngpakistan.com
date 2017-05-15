import { ConferencesComponent } from './conferences.component';

export const routes = [
  {
    path: '', children: [
    { path: '', component: ConferencesComponent }
  ]
  }
];
