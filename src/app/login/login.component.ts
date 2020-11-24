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

  usernameFlag = false;

  onSubmit(){
    var usernameExists = this.usernames.includes(this.userModel.username);
    if(usernameExists){
      this.usernameFlag = false;
    }
    else{
      this.usernameFlag = true;
    }
  }
}
