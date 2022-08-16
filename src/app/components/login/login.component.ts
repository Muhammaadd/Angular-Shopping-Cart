import { IUser } from './../../ViewModels/iuser';
import { UserService } from './../../Services/user.service';
import { userLogin } from '../../ViewModels/userlogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:userLogin={email:'',password:''};
  userList:IUser[]=[];
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    this.userService.getAllUsers().
    subscribe(
      x=> {
        let index:number = x.findIndex(user=>(user.username===this.userInfo.email)&&(user.password===this.userInfo.password))
        if(index==-1){
          this.route.navigate(["/home"]);
        }
        else {
          this.userService.setUserInfo(x[index]);
          this.route.navigate(["/userDetails"]);
        }
      }
      );
  }
}
