import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.uri = this.auth.uri;
  }

  onSubmit() {
    if (this.username.length>0&&this.password.length>0) {
      this.loading = true;
      this.btnClass = "disabled";
      this.logged = false;
      this.error = false;
      this.invalid = false;
      this.vacio = false;
      this.http.post(this.uri + "/login", {username: this.username, password: this.password}).subscribe(res => {

      }, err => {
        console.log(err)
        this.loading = false;
        this.btnClass = "";
        if (err.status==200){
          this.logged = true;
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
