import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = '/api'
  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService,
    private router:Router
  ){ }

  signin(user:User){
    return this.http.post(`${this.URL}/signin`,user)
  }
  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    if((this.jwtHelper.isTokenExpired(token)) ||  (!localStorage.getItem('token'))){
      return false;
    }
     return true;
  }

  registerUser(user:User){
    return this.http.post(`${this.URL}/register`,user);
  }
}
export interface User {
  name?:string,
  email?:string,
  pass?:string
}


