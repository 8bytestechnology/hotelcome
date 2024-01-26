import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { AppsRoutingModule } from './apps-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { CountToModule } from 'angular-count-to';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Offcanvas
import { NgxAsideModule } from 'ngx-aside';

import { NgbdContactSortableHeader } from './contact/contact-sortable.directive';

// Component
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ContactComponent,
    NgbdContactSortableHeader,
    LeaderboardsComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    CountToModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxAsideModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    TooltipModule.forRoot()
  ],
  providers: [
    DatePipe,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppsModule {
  constructor() {
    defineElement (lottie.loadAnimation);
  }
}
