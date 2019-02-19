import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "./user";
import { post } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: Array<User> = [];
  user1 = new User(1,"not signed in", "password", 3);

  private _loggeduser: User;

  private subject = new Subject<User>();
  currentsubject = this.subject.asObservable();

  private _userSource = new BehaviorSubject<User>(this.user1);
  _currentUser = this._userSource.asObservable();

  user2 = new User(1,"user2", "pass2", 3);

  _url = "http://localhost:8080/users";

  constructor(private http: HttpClient) {}

  changeUser(user: User) {
    this._userSource.next(user);
  }

  getAll(): Observable<any[]> {
    console.log(this.users);
    return this.http.get<any>(this._url);
  }

  getUser(username: string): Observable<any> {
    // let param = new HttpParams().set("username", user);
    return this.http.get(this._url + "/" + username);
    // , {params: param});
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this._url, user, {
      headers: { "Content-Type": "application/json" }
    });
  }

  validateUser(user: User): any {
    return this.http.post(this._url + "/verify", user);
  }
}
