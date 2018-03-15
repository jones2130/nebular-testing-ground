import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbAuthComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { TestPageComponent } from './test-page/test-page.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'test-page', pathMatch: 'full'},
  { path: 'auth', component: NbAuthComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'request-password', component: RequestPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
  ]},
  { path: 'test-page', component: TestPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
