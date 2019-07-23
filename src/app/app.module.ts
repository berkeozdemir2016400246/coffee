import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'admin',
        component:AdminComponent,
        canActivate:  [AuthGuard]
      },
      {
        path:'logout',
        component:LogoutComponent,
      },
      {
        path:'',
        component:HomeComponent
      }
      ])
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
