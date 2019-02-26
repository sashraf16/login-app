import { Component, OnInit, NgModule } from "@angular/core";
import { User } from "../user";
import { SourceListMap } from "source-list-map";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-userform",
  templateUrl: "./userform.component.html",
  styleUrls: ["./userform.component.css"]
})
// @NgModule({
//   imports: [],
//   exports: [],
//   declarations: [],
//   providers: [UserService]
// })
export class UserformComponent implements OnInit {
  role = ["Admin", "Manager", "User", "Guest"];

  signer = new User(0,"", "", 1);
  result: any;

  submitted = false;

  loggeduser = new User(0,"","",2);

  username = "";
  password ="";
  urole=0;

  send: User;

  falselog: boolean = true;

  onSubmit() {
    this.submitted = true;
    this.signIn();
  }

  falseLog() {
    this.falselog = false;
  }

  showUser(user: User) {
    this.loggeduser = user;
    console.log(user);
    console.log(this.loggeduser);

    this.username = user.username;
    this.password = user.password;
    this.urole = user.role;
  }

  trueLog(data: User) {
    this.send = new User(data.userID,data.username, data.password, data.role);
    console.log(this.send);
    this._uss.changeUser(this.send);
  }

  signIn() {
    this.showUser(this.signer);

    this._uss.validateUser(this.signer).subscribe(data => {
      if (data.username !== "not signed in") {
        console.log(data.username);
        this.trueLog(data);
        this._router.navigate(["/", "welcome"]);
      } else {
        this.falseLog();
      }
    });
  }

  constructor(private _uss: UserService, private _router: Router) {}

  ngOnInit() {
    // this._uss._currentUser.subscribe(data => (this.loggeduser = data));
  }
}
