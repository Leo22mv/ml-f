import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // uri: string = "http://localhost:8080";
  // uri: string = "https://ml-b-s.azurewebsites.net";
  // uri: string = "https://ml-b.onrender.com";
  uri: string = "https://ml-b-n.onrender.com";

  constructor(private http: HttpClient) { }

  register(req: any) {
    this.http.post(this.uri + "/registrarse", req);
  }

  login(username: string, password: string) {
    this.http.post(this.uri + "/login", {username: username, password: password}).subscribe(res => {
      console.log(res);
    });
  }

  getUsers() {
    return this.http.get<any[]>(this.uri + "/usuarios");
  }

  logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("Username");
    localStorage.removeItem("Admin");
  }

  public get logged(): boolean {
    return (localStorage.getItem("user_id") !== null);
    // return true
  }

  // public get admin(): boolean {
  //   return (localStorage.getItem("Admin") !== null);
  // }
}