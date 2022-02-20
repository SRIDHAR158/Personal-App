import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFuelComponent } from '../new-fuel/new-fuel.component';


@Component({
  selector: 'app-fuel-log',
  templateUrl: './fuel-log.component.html',
  styleUrls: ['./fuel-log.component.css']
})
export class FuelLogComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

 openDialog(){
   this.dialog.open(NewFuelComponent);
 }

  

}
