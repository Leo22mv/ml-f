import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // uri: string = "http://localhost:8080";
  uri: string = "https://ml-b-s.azurewebsites.net";

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
    localStorage.removeItem("auth_token");
    localStorage.removeItem("role");
  }

  public get logged(): boolean {
    return (localStorage.getItem("auth_token") !== null);
  }

  public get admin(): boolean {
    return (localStorage.getItem("Username") === "kbe");
  }
}