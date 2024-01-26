import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BasicComponent } from "./basic/basic.component";
import { Basic2Component } from './basic2/basic2.component';
import { CoverComponent } from "./cover/cover.component";

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'basic2',
    component: Basic2Component
  },
  {
    path: 'cover',
    component: CoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockScreenRoutingModule { }
