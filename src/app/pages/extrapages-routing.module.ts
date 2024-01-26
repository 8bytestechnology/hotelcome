import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

// component

import { TeamComponent } from './team/team.component';

import { FaqsComponent } from './faqs/faqs.component';




const routes: Routes = [
 
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'settings',
    component:SettingsComponent
  },
  {
    path: 'team',
    component:TeamComponent
  },
  
  {
    path: 'faqs',
    component:FaqsComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraPagesRoutingModule { }
