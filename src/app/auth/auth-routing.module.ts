import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


// component

const routes: Routes = [
  {
    path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
  },

  {
    path: 'lockscreen', loadChildren: () => import('./lockscreen/lockscreen.module').then(m => m.LockscreenModule)
  },
  {
    path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule)
  },
  {
    path: 'success-msg', loadChildren: () => import('./success-msg/success-msg.module').then(m => m.SuccessMsgModule)
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
