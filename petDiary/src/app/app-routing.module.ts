import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth.service';

export const ROUTES: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginAccountModule)},
  { path: 'create-account', loadChildren: () => import('./pages/create-account/create-account.module').then(module => module.CreateAccountModule)},
  { 
    path: 'posts', 
    loadChildren: () => import('./pages/posts/posts.module').then(module => module.LoginAccountModule),
    canLoad: [AuthGuard] 
  },
  { path: '**', redirectTo: '/login' },
  { path: '', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
