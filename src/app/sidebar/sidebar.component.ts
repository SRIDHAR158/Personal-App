import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
