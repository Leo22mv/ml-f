import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-a-logout',
  templateUrl: './a-logout.component.html',
  styleUrls: ['./a-logout.component.css']
})
export class ALogoutComponent implements OnInit {

  logged: boolean | undefined;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.logged = true
    } else {
      this.logged = false
    }
  }

  logout() {
    this.auth.logout();
  }
}
