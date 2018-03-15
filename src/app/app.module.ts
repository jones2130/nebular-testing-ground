import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NbThemeModule, NbCheckboxModule  } from '@nebular/theme';
import { NbDummyAuthProvider, NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestPageModule } from './test-page/test-page.module';

import { AUTH_CONFIG } from './auth.config';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { AuthGuard } from './auth/auth.guard';

import { NB_AUTH_TOKEN_CLASS , NbAuthJWTToken } from '@nebular/auth';
import { TestAuthProvider } from './provider/auth.provider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: AUTH_CONFIG
        },
      },
      forms: {
        login: {
          // provider: 'email',
          rememberMe: false,
        }
      }
    }),
    NbCheckboxModule,
    NbThemeModule.forRoot({name: 'default'}),
    TestPageModule
  ],
  providers: [AuthGuard,TestAuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
