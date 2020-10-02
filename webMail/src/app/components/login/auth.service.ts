import { Router } from '@angular/router';
import { LoginInterface } from './../../../interfaces/loginInterface';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  private isUserAuthenticated: boolean = false;

  showMenuEmiter = new EventEmitter<boolean>();

  loginAuthentication(user: LoginInterface) {
    if (user.email === 'test@email.com' &&
        user.password === '123456789') {
          this.isUserAuthenticated = true;
          this.showMenuEmiter.emit(true);
          this.router.navigate(['/']);
        }
    else {
      this.isUserAuthenticated = false;
      this.showMenuEmiter.emit(false);
    }
  }
}
