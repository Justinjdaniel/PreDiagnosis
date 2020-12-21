import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private _registerUrl = "http://localhost:3000/user/register";
  private _loginUrl = "http://localhost:3000/user/login";
  private _adminloginUrl = "http://localhost:3000/admin/login";

  registerUser(user){
    return this.http.post(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post(this._loginUrl, user)
  }
  
  adminLogin(user){
    return this.http.post(this._adminloginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
