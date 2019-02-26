import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {


  getID: any;
  getusername: any;

  user: User;
  allusers: User[];

  result:any;

  show: any;

  constructor(private _uss: UserService) { }

  getbyID(){

  }

  getbyusername() {
    this._uss.getUser(this.getusername).subscribe(data => this.user = data);
  }

  getallusers() {
    this._uss.getAll().subscribe(data=> this.allusers = data);
  }

  selectthisuser() {
    this.show = true;
  }

  updatethisuser() {
    this._uss.updateUser(this.user).subscribe(data => 
      {
        this.result = data
        if (data === true)
        {
          console.log("user has been updated");
          this._uss.getUser(this.user.username).subscribe(data =>
            {
              console.log("here is the new user");
              console.log(data);
            });
        }
        else
        {
          console.log("could not update");
        }
      });

  }

  ngOnInit() {
  }

}

