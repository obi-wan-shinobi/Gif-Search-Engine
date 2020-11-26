import { Component, OnInit } from '@angular/core';
import { SignupSerService } from '../signup-ser.service';
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usernames = ['shreyas', 'shreyask', 'shreyask1'];
  public passwords = ['password', 'password1', 'password2'];
  userModel = new User('', '', '', '', false);
  success = false;
  correctPass = true;
  usernameFlag = false;

  constructor(private _signupService: SignupSerService) { }

  ngOnInit() {
    this._signupService.name$
      .subscribe(
        username => {
          if(username != ''){
            this.usernames.push(username);
            console.log("Inside Observable:",this.usernames);
          }
        }
      );

    this._signupService.password$
      .subscribe(
        password => {
          if(password != '') {
            this.passwords.push(password);
            console.log("Inside Observable",this.passwords);
          }
        }
      );
  }

  onSubmit(){
    var usernameExists = this.usernames.includes(this.userModel.username);
    if(usernameExists){
      this.usernameFlag = false;
      this.success = true;
    }
    else{
      this.usernameFlag = true;
    }
    if(this.success){
      if(this.userModel.password == this.passwords[this.usernames.indexOf(this.userModel.username)]) {
        this.correctPass = true;
      }
      else {
        this.correctPass = false;
        this.success = false;
      }
    }
  }
}
