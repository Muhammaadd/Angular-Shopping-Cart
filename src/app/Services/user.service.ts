import { IUser } from './../ViewModels/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!:IUser;
  constructor(private httpClient:HttpClient) { }
  setUserInfo(user:IUser){
    this.user=user;
  }
  getUserInfo():IUser{
    return this.user;
  }
  getAllUsers(){
    return this.httpClient.get<IUser[]>('https://fakestoreapi.com/users');
  }
}
