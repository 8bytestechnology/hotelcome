import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';



const routes: Routes = [
  {
    path: 'calendar',
    component:CalendarComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'leaderboards',
    component:LeaderboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
