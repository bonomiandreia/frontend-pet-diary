import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],

exports: [RouterModule],
})
export class LoginPageRoutingModule { }
