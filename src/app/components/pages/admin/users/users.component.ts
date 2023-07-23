import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe(res => {
      this.usersList = res;
    })
  }

}
