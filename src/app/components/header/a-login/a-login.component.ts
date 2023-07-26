import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  logged: boolean | undefined;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    // if (localStorage.getItem("token")) {
    //   this.logged = true
    // } else {
    //   this.logged = false
    // }
  }

}
