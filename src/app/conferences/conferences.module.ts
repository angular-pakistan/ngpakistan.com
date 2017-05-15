import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './conferences.routes';
import { ConferencesComponent } from './conferences.component';

console.log('`Conferences` bundle loaded asynchronously');

@NgModule({
  declarations: [
    ConferencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ConferencesModule {
  public static routes = routes;
}
