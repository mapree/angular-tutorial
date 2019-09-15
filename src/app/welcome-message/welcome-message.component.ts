import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'; 

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  description = 'Welcome to the app';
  constructor(private dialogRef: MatDialogRef<WelcomeMessageComponent>){}

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}