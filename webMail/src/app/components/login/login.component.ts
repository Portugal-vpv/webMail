import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoginModalComponent } from './../modals/register-modal/register-modal/loginModal/loginModal/loginModal.component';
import { AuthService } from './auth.service';
import { LoginInterface } from './../../../interfaces/loginInterface';
import { User } from './../../../interfaces/userInterface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly _ngUnsubscribe$: Subject<any> = new Subject;

  constructor(
              private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private router: Router
              ) { }

  form: FormGroup;

  hidePassword: boolean = true;
  isUserLogged: boolean = false;
  userMe: User;
  userLogin: LoginInterface;

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
    this.openModal();
    //this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }

  login() {
    //this.authService.loginAuthentication(this.userLogin);
  }

  checkEmailValidity() {
    return (this.form.controls.email.status === "VALID");
  }

  checkPasswordValidity() {
    return (this.form.controls.password.status ==="VALID");
  }

  openModal() {
    const dialogRef = this.dialog.open(LoginModalComponent,{
      data: this.userLogin,
      position: {top: '20px'}
    });
    dialogRef.afterClosed()
    .pipe(takeUntil(this._ngUnsubscribe$))
    .subscribe(result => {
      console.log("Modal Closed");
    })
  }

  navigateToRegistrationPage() {
    this.router.navigate(['register']);
  }



  ngOnDestroy() {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }
  }

