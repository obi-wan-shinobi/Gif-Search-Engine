import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernames = ['shreyas', 'shreyask', 'shreyask1'];
  userModel = new User('', 'rob@123.com', 'Robb', 'Robrox', false);
  success = false;
  usernameFlag = false;

  onSubmit(){
    var usernameExists = this.usernames.includes(this.userModel.username);
    if(usernameExists){
      this.usernameFlag = false;
      this.success = true;
    }
    else{
      this.usernameFlag = true;
    }
  }
}
