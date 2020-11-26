import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupSerService {

  private userName = new BehaviorSubject<string>('');
  private userPassword = new BehaviorSubject<string>('');

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
