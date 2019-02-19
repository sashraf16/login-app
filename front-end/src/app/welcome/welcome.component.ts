import { Component, OnInit, Input, NgModule } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import { UserformComponent } from "../userform/userform.component";
import { GiphyService } from "../giphy.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
@NgModule({
  imports: [UserformComponent],
  exports: [],
  declarations: [],
  providers: []
})
export class WelcomeComponent implements OnInit {
  allusers: User[];
  loggeduser: User;
  loggedany: any;

  // user2 = new User("user2", "pass2", 3);

  result: any;

  constructor(private _uss: UserService, private _giphy: GiphyService) {}

  ngOnInit() {
    this._uss.currentsubject.subscribe(data => {
      this.loggeduser = data;
      console.log(this.loggeduser);
    });
  }

  showUser() {
    console.log(this.loggeduser);
    this._uss._currentUser.subscribe(data => {
      this.loggeduser = data;
      console.log(this.loggeduser);
    });

    this._giphy.get("flying dutchman spongebob").subscribe(url => (this.result = url));
    console.log(this.result);

  }
}
