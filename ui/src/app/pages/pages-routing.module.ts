import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';



// component

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';

import { DeviceComponent } from './devices/device.component';
import { GuestComponent } from './guests/guest.component';
import { RoomComponent } from './rooms/room.component';




const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'device',
    component: DeviceComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'leaderboards',
    component: LeaderboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
