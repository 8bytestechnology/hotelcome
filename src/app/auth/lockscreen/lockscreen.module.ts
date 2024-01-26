import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { LockScreenRoutingModule } from './lockscreen-routing.module';

// Component
import { BasicComponent } from './basic/basic.component';
import { Basic2Component } from './basic2/basic2.component';
import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    BasicComponent,
    Basic2Component,
    CoverComponent
  ],
  imports: [
    CommonModule,
    LockScreenRoutingModule
  ]
})
export class LockscreenModule { }
