import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string | null = "";
  admin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("Username");
    if (this.name=="kbe") {
      this.admin = true;
    }
  }

}
