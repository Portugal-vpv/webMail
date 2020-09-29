import { RegisterComponent } from './register.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
