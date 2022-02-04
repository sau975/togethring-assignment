import { IRegistration } from './../../../registration/interfaces/registration';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../interfaces/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model!: ILogin;
  form!: FormGroup;
  message!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let registeredUser:any = localStorage.getItem('user');
    let user: IRegistration = JSON.parse(registeredUser);
    if(user){
      if(user.userName == this.form.get('userName')?.value && user.password == this.form.get('password')?.value){
        localStorage.setItem('isLoggedIn', "true");
        this.router.navigate(['home']);
      }
      else{
        this.message = "Please check your username and password";
      }
    }
    else{
      this.message = "Please register First";
    }
  }
}
