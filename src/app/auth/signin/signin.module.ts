import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { SigninRoutingModule } from './signin-routing.module';

// Component

import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    CoverComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
