import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';


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
    path: 'pages', loadChildren: () => import('./extrapages.module').then(m => m.ExtrapagesModule)
  },
  {
    path: 'apps', loadChildren: () => import('./apps.module').then(m => m.AppsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
