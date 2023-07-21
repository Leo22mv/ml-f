import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  logged: boolean = false;
  loading: boolean = false;
  error: boolean = false;

  uri: string = "";

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.uri = this.auth.uri;
  }

  onSubmit() {
    this.loading = true;
    this.logged = false;
    this.error = false;
    this.http.post(this.uri + "/login", {username: this.username, password: this.password}).subscribe(res => {

    }, err => {
      console.log(err)
      this.loading = false;
      if (err.status==200){
        this.logged = true;
      } else {
        this.error = true;
      }
    })
  }

}
