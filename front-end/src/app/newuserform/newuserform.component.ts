import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-newuserform",
  templateUrl: "./newuserform.component.html",
  styleUrls: ["./newuserform.component.css"]
})
export class NewuserformComponent implements OnInit {
  role = ["Admin", "Manager", "User", "Guest"];

  newuser = new User(0,"", "", 3);
  selected: any;
  newrole: any;

  testsub: any;

  submitted = false;

  username = "";
  password ="";
  urole=0;

  tester: boolean = true;

  used:any;

  send: User;

  onSubmit() {
    this.submitted = true;
  }

  falseUser() {
    this.tester = false;
  }

  trueUser() {
    this.send = new User(0,this.username, this.password, this.urole);
    this._uss.changeUser(this.send);
  }

  saveUser(user: User) {

    console.log('save');
    
    this.username = user.username;
    this.password = user.password;
    this.urole = user.role;
  }

  createUser() {
    console.log(this.newuser);
    this.used = this.newuser.username;
    console.log(this.used);
    this.newrole = this.newuser.role;

    switch (this.newrole) {
      case "Admin":
        this.newuser.role = 1;
        break;
      case "Manager":
        this.newuser.role = 2;
        break;
      case "User":
        this.newuser.role = 3;
        break;
      case "Guest":
        this.newuser.role = 4;
        break;
    }

    this.saveUser(this.newuser);
    console.log(this.newuser);

    this._uss.createUser(this.newuser).subscribe(data => {
      if (data === -1)
      {
        this.falseUser();
      }
      else 
      {
        this.trueUser();

        this._router.navigate(["/", "welcome"]);
      }
    });
  }

  constructor(private _uss: UserService, private _router: Router) {}

  ngOnInit() {}
}
