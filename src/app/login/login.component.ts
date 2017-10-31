import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(private  UserService: UserService) { }

  ngOnInit() {
  }

  login(){
    console.log("email:"+this.email+"-pass:"+this.password);
    // this.UserService.login(this.email,this.password).then(function(response){
    //   console.log(response);
    // });
    this.UserService.login(this.email,this.password).subscribe( data => {
      console.log(data);
    });

  }

}
