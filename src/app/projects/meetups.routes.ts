import { ProjectsComponent } from './projects.component';

export const routes = [
  {
    path: '', children: [
    { path: '', component: ProjectsComponent }
  ]
  }
];
