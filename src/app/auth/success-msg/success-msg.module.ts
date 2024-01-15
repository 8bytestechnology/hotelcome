import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { SuccessMsgRoutingModule } from './success-msg-routing.module';

// Component

import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    CoverComponent
  ],
  imports: [
    CommonModule,
    SuccessMsgRoutingModule
  ]
})
export class SuccessMsgModule { }
