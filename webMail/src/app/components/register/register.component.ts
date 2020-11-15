import { Router } from '@angular/router';
import { RegisterModalComponent } from './../modals/register-modal/register-modal/register-modal.component';
import { RegisterInterface } from './../../../interfaces/registerInterface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
    ) { }

  private readonly _ngUnsubscribe$: Subject<any> = new Subject();

  form: FormGroup;
  registerUser: RegisterInterface;
  inputValidators = {
    name: false,
    email: false,
    password: false
  }

  hidePassword: boolean = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.form.valueChanges
    .pipe(takeUntil(this._ngUnsubscribe$))
    .subscribe(data => {

        })
  }

  openModal() {
    const dialogRef = this.dialog.open(RegisterModalComponent,
       {data: this.inputValidators,
        position:{top: '20px'},
        width: '300px',
        height: '180px'
       });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Entered dialogRef.afterClosed()`);
    })
  }

  checkPasswordValidity() {
    return (this.registerUser.password === this.registerUser.confirmPassword &&
            this.form.controls.confirmPassword.status === "VALID"
        );
  }

  checkNameValidity() {
    return (this.form.controls.firstName.status === "VALID" && this.form.controls.lastName.status === "VALID");
  }

  checkEmailValidity() {
    return (this.form.controls.email.status === "VALID");
  }

  checkRegistrationValidity() {
    return (this.form.status === "VALID");
  }

  checkInputValidators() {
    if(this.checkNameValidity()) {
      this.inputValidators.name = true;
    }
    if(this.checkEmailValidity()) {
      this.inputValidators.email = true;
    }
    if(this.checkPasswordValidity()) {
      this.inputValidators.password = true;
    }
    if(!this.checkNameValidity()) {
      this.inputValidators.name = false;
    }
    if(!this.checkEmailValidity()) {
      this.inputValidators.email = false;
    }
    if(!this.checkPasswordValidity()) {
      this.inputValidators.password = false;
    }
  }

  onSubmit() {
    // this.openModal();
    //console.log(this.form);
    this.registerUser = this.form.value;
    this.checkInputValidators();
    this.openModal();



  }

  navigateToLoginPage() {
    this.router.navigate(['login']);
  }
  ngOnDestroy() {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

}
