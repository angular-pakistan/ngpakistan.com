import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SocialComponent } from './social.component';

console.log('`Meetups` bundle loaded asynchronously');

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class MeetupsModule {
}
