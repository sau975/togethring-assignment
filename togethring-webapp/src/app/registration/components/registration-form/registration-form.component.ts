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
    this.router.navigate(['login']);
  }
}
