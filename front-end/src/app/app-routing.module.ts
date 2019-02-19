import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserformComponent } from "./userform/userform.component";
import { NewuserformComponent } from "./newuserform/newuserform.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TestingComponent } from './testing/testing.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "userform", component: UserformComponent },
  { path: "newuser", component: NewuserformComponent },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "testing", component: TestingComponent},
  { path: "deleteusers", component: DeleteusersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
