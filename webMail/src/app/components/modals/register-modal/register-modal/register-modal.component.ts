import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../../material/material.module';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data.name, this.data.email, this.data. password);
  }

  isInputValid() {
    return (this.data.name && this.data.email && this.data.password);
  }
}
