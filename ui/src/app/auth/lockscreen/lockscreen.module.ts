import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { LockScreenRoutingModule } from './lockscreen-routing.module';

// Component
import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    CoverComponent
  ],
  imports: [
    CommonModule,
    LockScreenRoutingModule
  ]
})
export class LockscreenModule { }
