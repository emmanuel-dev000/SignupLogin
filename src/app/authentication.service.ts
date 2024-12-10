import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User = {
    email: 'user@email.com',
    password: 'password'
  };
  constructor() { }

  get userLoggedIn() {
    return this.user;
  }
}
