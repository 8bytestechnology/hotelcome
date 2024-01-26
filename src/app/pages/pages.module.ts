import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Counter
import { CountToModule } from 'angular-count-to';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetsComponent
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
    LeafletModule
  ],
  providers: [
    DatePipe
  ]
})
export class PagesModule { }
