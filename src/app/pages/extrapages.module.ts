import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { ExtraPagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Swiper
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Offcanvas
import { NgxAsideModule } from 'ngx-aside';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// component

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [

    ProfileComponent,
    SettingsComponent,
    TeamComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    SharedModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgxAsideModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgOtpInputModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class ExtrapagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
