import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isAuthenticated=false;
  constructor(public http: HttpClient) { }
  login(username:string,password:string)
  {
    this.http.get("https://localhost:7020/api/account/", { responseType:'text', params:{'username':username, 'password':password} })
    .subscribe({
      next: (t) => {
        console.log(t);
        localStorage.setItem('token', t);
        this.isAuthenticated=true;
        let decoded:{ username:string, isAdmin:boolean, isStudent:boolean } = jwtDecode(t);
        console.log(decoded.username);
        console.log(decoded.isAdmin);
        console.log(decoded.isStudent);
      }
    })
    
  }
  logout(){
    console.log(localStorage.getItem('token'))
    localStorage.removeItem("token");
    this.isAuthenticated=false;
  }
}
