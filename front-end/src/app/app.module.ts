import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewuserformComponent } from './newuserform/newuserform.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestingComponent } from './testing/testing.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    DashboardComponent,
    NewuserformComponent,
    HomeComponent,
    WelcomeComponent,
    TestingComponent,
    DeleteusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
