import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { Observable } from "rxjs";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.css"]
})
export class TestingComponent implements OnInit {
  users: Array<any> = [];

  showNav = false;

  user2 = new User(1,"user2", "pass2", 3);

  testname: string;
  newname: string;
  newpass: string;

  singleuser: User;
  newuser: User;

  testsub: any;

  testuser: any;

  constructor(private _uss: UserService) {}

  ngOnInit() {}

  getAll(): void {
    this._uss.getAll().subscribe(data => (this.users = data));
    // this.users=this._uss.getAll();
    console.log(this.users);
  }

  getUser() {
    console.log("get user");
    this._uss
      .getUser(this.testname)
      .subscribe(data => (this.singleuser = data));
    console.log(this.singleuser);
  }

  newUser() {
    this.newuser = new User(1,this.newname, this.newpass, 3);

    console.log(this.newUser);
    this._uss.createUser(this.newuser).subscribe(data => this.testsub = data);
    console.log(this.testsub);
  }

  getObs() {
    this._uss.changeUser(this.user2);
    this._uss._currentUser.subscribe(data => this.testuser = data);
    console.log(this.testuser);
  }

}
