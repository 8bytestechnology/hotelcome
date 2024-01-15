import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { LogoutRoutingModule } from './logout-routing.module';

// Component

import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    CoverComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule
  ]
})
export class LogoutModule { }
