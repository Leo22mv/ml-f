import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  btnClass: string = "";

  username: string = "";
  password: string = "";

  logged: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  invalid: boolean = false;
  vacio: boolean = false;

  uri: string = "";

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.uri = this.auth.uri;
  }

  onSubmit() {
    // this.router.navigate(["/tienda"]);
    // localStorage.setItem("token", "1");


    if (this.username.length>0&&this.password.length>0) {
      this.loading = true;
      this.btnClass = "disabled";
      this.logged = false;
      this.error = false;
      this.invalid = false;
      this.vacio = false;
      this.http.post(this.uri + "/login", {username: this.username, password: this.password}).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.btnClass = "";
        this.logged = true;
        localStorage.setItem("auth_token", res.token);
        localStorage.setItem("role", res.Role[0].authority);
      }, err => {
        console.log(err)
        this.loading = false;
        this.btnClass = "";
        if (err.status==200){
          this.logged = true;
          // this.router.navigate(["/tienda"]);
          // localStorage.setItem("token", "1");
        } else if (err.status==401) {
          this.invalid = true;
        } else {
          this.error = true;
        }
      })
    } else {
      this.logged = false;
      this.error = false;
      this.invalid = false;
      this.vacio = true;
    }
  }
}