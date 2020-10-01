import { User } from './../../../interfaces/userInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  viewPassword: boolean = false;
  isUserLogged: boolean = false;
  userMe: User;
  ngOnInit(): void {
  }

}
