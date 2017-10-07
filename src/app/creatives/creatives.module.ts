import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CreativesComponent } from './creatives.component';

console.log('`Meetups` bundle loaded asynchronously');

@NgModule({
  declarations: [
    CreativesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class MeetupsModule {
}
