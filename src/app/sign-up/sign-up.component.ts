import { Component, OnInit } from '@angular/core';
import { SignupSerService } from '../signup-ser.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  usernames = ['shreyas', 'shreyask', 'shreyask1'];
  passwords = ['password', 'password1', 'password2'];
  emails = ['shreyaskalvankar@gmail.com', 'shreyas@gmail.com', 'shreyas@test.com'];
  usernameFlag = false;
  emailFlag = false;
  success = false;

  userModel = new User('', '', '', '', false);

  constructor (private _signupService : SignupSerService) {}

  onSubmit(){
    var usernameExists = this.usernames.includes(this.userModel.username);
    if(usernameExists){
      this.usernameFlag = true;
    }
    else{
      this.usernameFlag = false;
    }

    var emailExists = this.emails.includes(this.userModel.email);
    if(emailExists){
      this.emailFlag = true;
    }
    else{
      this.emailFlag = false;
    }

    if(this.emailFlag == false && this.usernameFlag == false)
      this.success = true;

    if(this.success) {
      this._signupService.sendUsername(this.userModel.username);
      this._signupService.sendPassword(this.userModel.password);
      this.usernames.push(this.userModel.username);
      this.emails.push(this.userModel.email);
      this.passwords.push(this.userModel.password);
    }
  }

}
