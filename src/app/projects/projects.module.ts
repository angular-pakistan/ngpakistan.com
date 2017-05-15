import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './meetups.routes';
import { ProjectsComponent } from './projects.component';

console.log('`projects` bundle loaded asynchronously');

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProjectsModule {
  public static routes = routes;
}
