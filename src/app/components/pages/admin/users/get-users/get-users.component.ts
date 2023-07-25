import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  loading: boolean = true;
  error: boolean = false;

  usersList: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe(res => {
      this.loading = false;
      this.usersList = res;
      // console.log(res);
    }, err => {
      this.loading = false;
      this.error = true;
    })
    }
    
}
