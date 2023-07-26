import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-a-profile',
  templateUrl: './a-profile.component.html',
  styleUrls: ['./a-profile.component.css']
})
export class AProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
