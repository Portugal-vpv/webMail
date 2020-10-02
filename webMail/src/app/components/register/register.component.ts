import { RegisterInterface } from './../../../interfaces/registerInterface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  registerUser: RegisterInterface;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      email: [null],
      password: [null],
      confirmPassword: [null]
    });
  }

  onSubmit() {
    this.registerUser = this.form.value;
    console.log(this.registerUser);
  }

}
