import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginModal',
  templateUrl: './loginModal.component.html',
  styleUrls: ['./loginModal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
  }

}
