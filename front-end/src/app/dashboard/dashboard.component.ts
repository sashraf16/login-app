import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  loggeduser: User;

  constructor(private _uss: UserService, private _router: Router) {}

  ngOnInit() {
    this._uss._currentUser.subscribe(data => this.loggeduser = data);
  }

  deleteUsers() {
    this._router.navigate(["/", "deleteusers"]);
  }

  updateUsers() {
    this._router.navigate(["/", "updateusers"]);
  }

  createUsers() {
    this._router.navigate(["/", "createusers"]);
  }

 
}
