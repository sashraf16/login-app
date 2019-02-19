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
  loggedout = new User (0,"not signed in", "password", 3);

  signOut() {
    this._uss.changeUser(this.loggedout);
    this._router.navigate(["/", "home"]);
  }

  constructor(private _uss: UserService, private _router: Router) {};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._uss._currentUser.subscribe(data => this.loggedin = data);
  }
}
