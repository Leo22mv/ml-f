import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-a-register',
  templateUrl: './a-register.component.html',
  styleUrls: ['./a-register.component.css']
})
export class ARegisterComponent implements OnInit {

  logged: boolean | undefined;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.logged = true
    } else {
      this.logged = false
    }
  }

}
