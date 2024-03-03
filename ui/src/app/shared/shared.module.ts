import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DateTimeAgoPipe } from './pipes/datetimeago.pipe';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DateTimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    DateTimeAgoPipe
  ]
})
export class SharedModule { }
