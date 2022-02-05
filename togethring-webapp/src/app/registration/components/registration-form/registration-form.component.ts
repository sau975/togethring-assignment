import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegistration } from '../../interfaces/registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  model!: IRegistration;
  form!: FormGroup;
  message!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  register(){
    let data:IRegistration  = Object.assign({}, this.model, this.form.value);
    localStorage.setItem('user', JSON.stringify(data));
    let user:any = localStorage.getItem('user');
    let userRegistedDetails = JSON.parse(user);
    alert("You have successfully Registered. Your User Name is " + userRegistedDetails.userName + " and Password is " + userRegistedDetails.password);
    this.router.navigate(['login']);
  }

  validateEmail(){
    let email = this.form.get('email')?.value;
    if(email){
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }else{
      return null;
    }
  };

  validatePhone(){
    let phone = this.form.get('phone')?.value;
    if(phone){
      var re = /^[0-9\-\+]{10,10}$/;
      return re.test(phone);
    }else{
      return null;
    }
  };

  validatePassword(){
    let password = this.form.get('password')?.value;
    if(password){
      var re = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
      return re.test(password);
    }else{
      return null;
    }
  };
}
