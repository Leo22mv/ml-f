import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-register',
  templateUrl: './a-register.component.html',
  styleUrls: ['./a-register.component.css']
})
export class ARegisterComponent implements OnInit {

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
