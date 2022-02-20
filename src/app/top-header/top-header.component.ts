import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  durationInSeconds = 2;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'X', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
   }


}
