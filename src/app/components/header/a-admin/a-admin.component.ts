import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-a-admin',
  templateUrl: './a-admin.component.html',
  styleUrls: ['./a-admin.component.css']
})
export class AAdminComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  public get admin(): boolean {
    return (localStorage.getItem("Admin") !== null);
  }

}
