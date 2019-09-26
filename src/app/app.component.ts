import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import {WelcomeMessageComponent} from './welcome-message/welcome-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private dialog:MatDialog){
  }

  // openDialog(){
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   const dialogRef = this.dialog.open(WelcomeMessageComponent, dialogConfig);
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/