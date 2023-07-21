import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  registered: boolean = false;
  error: boolean = false;
  

  uri: string = "";
  email: string = "";
  nombre: string = "";
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.uri = this.auth.uri;
  }

  onSubmit() {
    this.registered = false;
    this.error = false;
    this.loading = true;
    // console.log(this.email)
    this.http.post(this.uri + "/registrarse", {email: this.email, nombre: this.nombre, username: this.username, password: this.password}).subscribe(res => {
      // console.log(res);
      this.loading = false;
      this.registered = true;
    }, (err) => {
      // console.log(err);
      this.loading = false;
      if (err.status==200) {
        this.registered = true;
      } else {
        this.error = true;
      }
    })
  }
}
