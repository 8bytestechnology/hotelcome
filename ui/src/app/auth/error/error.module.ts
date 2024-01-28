import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { ErrorRoutingModule } from './error-routing.module';

// Component
import { Basic404Component } from './basic404/basic404.component';
import { Cover404Component } from './cover404/cover404.component';
import { Alt404Component } from './alt404/alt404.component';
import { Page500Component } from './page500/page500.component';
import { OfflinePageComponent } from './offline-page/offline-page.component';

// Load Icons
import { defineElement  } from 'lord-icon-element';
import lottie from 'lottie-web';

@NgModule({
  declarations: [
    Basic404Component,
    Cover404Component,
    Alt404Component,
    Page500Component,
    OfflinePageComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorModule { 
  constructor() {
    defineElement (lottie.loadAnimation);
  }
}
