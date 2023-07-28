import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  btnClass: string = "";

  loading: boolean = false;
  registered: boolean = false;
  error: boolean = false;
  invalid: boolean = false;
  vacio: boolean = false;
  

  uri: string = "";
  email: string = "";
  nombre: string = "";
  username: string = "";
  password: string = "";
  rol: string[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.uri = this.auth.uri;
  }

  onSubmit() {
    if (this.email.length>0&&this.nombre.length>0&&this.username.length>0&&this.password.length>0) {
      this.registered = false;
      this.error = false;
      this.invalid = false;
      this.loading = true;
      this.vacio = false;
      // console.log(this.email)
      this.http.post(this.uri + "/registrarse", {email: this.email, nombre: this.nombre, username: this.username, password: this.password, roles: ["USER"]}).subscribe(res => {
        // console.log(res);
        this.loading = false;
        this.registered = true;
      }, (err) => {
        // console.log(err);
        this.loading = false;
        if (err.status==200) {
          this.registered = true;
        } else if(err.status==401) {
          this.invalid = true;
        } else {
          this.error = true;
        }
      })
    } else {
      this.registered = false;
      this.error = false;
      this.invalid = false;
      this.vacio = true;
    }
  }
}
