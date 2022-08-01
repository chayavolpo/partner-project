import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName;

  constructor() {
    this.userName = sessionStorage.getItem('userName') || '';
  }

  login(userName: string) {
    sessionStorage.setItem('userName', userName);
    this.userName = userName;
  }

  getUser() {
    return this.userName;
  }
}
