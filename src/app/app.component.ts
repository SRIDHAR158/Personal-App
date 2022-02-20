import { Component, OnInit, Injectable} from '@angular/core';

// export interface People {
//   name: string;
//   status: string;
//   time: any;
//   usage: string;
//   volume: string;
//   cost: string;
//   total: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
   
  constructor(){}
  
  //currentItem: any;
  
  ngOnInit(): void {
    //this.currentItem = "Television";
  }
  
  currentItem = "Television";
} 
