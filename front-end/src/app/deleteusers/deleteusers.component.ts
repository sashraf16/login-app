import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-deleteusers',
  templateUrl: './deleteusers.component.html',
  styleUrls: ['./deleteusers.component.css']
})
export class DeleteusersComponent implements OnInit {

  getID: any;
  getusername: any;

  user: User;
  allusers: User[];

  constructor(private _uss: UserService) { }

  getbyID(){

  }

  getbyusername(){
    this._uss.getUser(this.getusername).subscribe(data => this.user = data);
  }

  getallusers(){
    this._uss.getAll().subscribe(data=> this.allusers = data);
  }

  ngOnInit() {
  }

}
