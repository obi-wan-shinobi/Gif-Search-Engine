import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  usernames = ['shreyas', 'shreyask', 'shreyask1'];
  emails = ['shreyaskalvankar@gmail.com', 'shreyas@gmail.com'];
  usernameFlag = false;
  emailFlag = false;
  success = false;

  userModel = new User('', '', '', '', false);

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
  }

}
