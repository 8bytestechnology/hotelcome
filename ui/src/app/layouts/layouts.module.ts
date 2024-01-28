import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Language
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Offcanvas
import { NgxAsideModule } from 'ngx-aside';

// Component
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TopTagbarComponent } from './top-tagbar/top-tagbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { TwoColumnSidebarComponent } from './two-column-sidebar/two-column-sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    FooterComponent,
    TopbarComponent,
    TopTagbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    HorizontalComponent,
    HorizontalTopbarComponent,
    TwoColumnComponent,
    TwoColumnSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxAsideModule
  ],
  providers: [LanguageService],
})
export class LayoutsModule { }
