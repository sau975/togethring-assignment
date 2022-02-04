import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { IRegistration } from 'src/app/registration/interfaces/registration';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search!:string;
  userDetails!: IRegistration;
  users!:any[];
  user:any;
  items!: MenuItem[];
  newMessage!: string;
  display: boolean = false;

  private _getMessage!:IMessage;
  get getMessage():IMessage{
    return this._getMessage;
  }
  set getMessage(value:IMessage){
    if(value){
      this._getMessage = value;
      this.users.forEach(u => {
        if(u.id == value.id){
          u['message'] = value.message;
        }
      })
    }
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    let user:any = localStorage.getItem('user');
    this.userDetails = JSON.parse(user);
    this.userService.getUsers().subscribe(res => {
      this.users = res.data;
    });

    this.items = [
      {
        label: 'Profile',
        routerLink: "/profile"
      },
      {
        label: 'Setting'
      },
      {
        label: 'Logout',
        command: () => {
          this.logout();
        }
      }
    ]
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openChat(user:any){
    this.display = true;
    this.user = user;
  }

  send(){
    let message: IMessage = {
      id: this.user.id,
      message: this.newMessage
    }
    this.getMessage = message;
  }

}

export interface IMessage
{
  id: number;
  message: string;
}
