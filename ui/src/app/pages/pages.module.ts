import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgbdContactSortableHeader } from './contact/contact-sortable.directive';

// Counter
import { CountToModule } from 'angular-count-to';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Offcanvas
import { NgxAsideModule } from 'ngx-aside';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NgOtpInputModule } from 'ng-otp-input';

import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { DeviceComponent } from './devices/device.component';
import { GuestComponent } from './guests/guest.component';
import { RoomComponent } from './rooms/room.component';







@NgModule({
  declarations: [
    DashboardComponent,
    WidgetsComponent,
    ProfileComponent,
    SettingsComponent,
    DeviceComponent,
    GuestComponent,
    RoomComponent,
    FaqsComponent,
    CalendarComponent,
    ContactComponent,
    NgbdContactSortableHeader,
    LeaderboardsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CountToModule,
    NgxUsefulSwiperModule,
    BsDropdownModule.forRoot(),
    SimplebarAngularModule,
    SharedModule,
    NgApexchartsModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,

    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    NgxAsideModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgOtpInputModule,
    FullCalendarModule,
    TimepickerModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DatePipe
  ]
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
