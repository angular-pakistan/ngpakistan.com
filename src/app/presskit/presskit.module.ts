import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './presskit.routes';
import { PressKitComponent } from './presskit.component';

console.log('`Projects` bundle loaded asynchronously');

@NgModule({
  declarations: [
    PressKitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PressKitModule {
  public static routes = routes;
}
