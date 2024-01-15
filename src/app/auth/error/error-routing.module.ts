import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component

import { Cover404Component } from './cover404/cover404.component';
import { OfflinePageComponent } from './offline-page/offline-page.component';
import { Page500Component } from './page500/page500.component';

// Components

const routes: Routes = [
  
  {
    path: '404-cover',
    component: Cover404Component
  },
  
  {
    path: '500',
    component: Page500Component
  },
  {
    path: 'offline',
    component: OfflinePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
