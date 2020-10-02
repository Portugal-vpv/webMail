import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from './../../material/material.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
