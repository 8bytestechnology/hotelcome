import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// component

const routes: Routes = [
 
 
  {
    path: 'lockscreen', loadChildren: () => import('./lockscreen/lockscreen.module').then(m => m.LockscreenModule)
  },

  {
    path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
