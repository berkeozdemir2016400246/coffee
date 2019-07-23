import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface  myData {
  success : boolean,
  message: string,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = true

  setLoggedIn (value:boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }
  constructor(private http:HttpClient) { }


  getUserDetails(username, password){
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }
  }
