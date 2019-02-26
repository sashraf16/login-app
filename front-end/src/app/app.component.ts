import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full stack';

  loggedin: User;
  loggedout = new User (-1,"not signed in", "not signed pass", -1);

  signOut() {
    this._uss.changeUser(this.loggedout);
    this._router.navigate(["/", "home"]);
  }

  dashCheck() {
    console.log(this.loggedin);
    if (this.loggedin.role >= 3) {
      console.log("greater than equal to 3");
      this._router.navigate(["/", "dashboardgeneral"]);
    }
    else if (this.loggedin.role == -1){
      console.log("-1");
      this._router.navigate(["/", "dashboardgeneral"]);
    }
    else {
      console.log("admin");
      this._router.navigate(["/", "dashboard"]);
    }
  }

  constructor(private _uss: UserService, private _router: Router) {};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._uss._currentUser.subscribe(data => this.loggedin = data);
  }
}
