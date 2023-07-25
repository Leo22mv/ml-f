import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  logged: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.logged = true
    } else {
      this.logged = false
    }
  }

}
