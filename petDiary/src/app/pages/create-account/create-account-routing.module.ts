import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account.component';

export const ROUTES: Routes = [
  { path: '', component: CreateAccountComponent }
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],

exports: [RouterModule],
})
export class CreatePageRoutingModule { }
