import { AuthService } from './auth.service';
import { LoginInterface } from './../../../interfaces/loginInterface';
import { User } from './../../../interfaces/userInterface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  form: FormGroup;

  hidePassword: boolean = true;
  isUserLogged: boolean = false;
  userMe: User;
  userLogin: LoginInterface

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.userLogin = this.form.value;
    console.log(this.userLogin);
    console.log(this.form);
    //this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }

  login() {
    this.authService.loginAuthentication(this.userLogin);
  }


  }

