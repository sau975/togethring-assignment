import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getFirstPageUsers() {
    return this.http.get<any>('https://reqres.in/api/users?page=1');
  }

  getSecondPageUsers() {
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }

}
