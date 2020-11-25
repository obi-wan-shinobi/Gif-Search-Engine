import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupSerService {

  private userName = new Subject<string>();
  private userPassword = new Subject<string>();

  name$ = this.userName.asObservable();
  password$ = this.userPassword.asObservable();

  constructor() { }

  sendUsername(username: string) {
    this.userName.next(username);
  }

  sendPassword(password: string) {
    this.userPassword.next(password);
  }
}
