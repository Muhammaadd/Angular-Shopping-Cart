import { UserService } from './../../Services/user.service';
import { IUser } from './../../ViewModels/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!:IUser
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log("Hello from Details",this.userService.getUserInfo());
    this.user = this.userService.getUserInfo();
  }

}
