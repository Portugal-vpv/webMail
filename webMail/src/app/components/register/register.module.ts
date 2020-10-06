import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterRoutingModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
