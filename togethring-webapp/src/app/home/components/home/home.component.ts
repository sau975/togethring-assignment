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
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set:any;

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

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event:any) {
    console.log(this.newMessage)
    const { newMessage } = this;
    console.log(newMessage);
    console.log(`${event.emoji.native}`)
    const text = `${newMessage}${event.emoji.native}`;

    this.newMessage = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }

  onBlur() {
    console.log('onblur')
  }

}

export interface IMessage
{
  id: number;
  message: string;
}
