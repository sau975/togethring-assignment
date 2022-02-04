import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:any;

  constructor() { }

  ngOnInit(): void {
    let user:any = localStorage.getItem('user');
    this.userDetails = JSON.parse(user);
  }

}
