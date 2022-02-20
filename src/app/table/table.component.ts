import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from '../services/api/table.service';
import { IPeople } from './table';
//import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['name', 'status', 'time', 'usage', 'volume', 'cost', 'total'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  public locarr = [];
  constructor(private _tableService: TableService) {
   }

  ngOnInit(): void {

    this._tableService.doGetWithParams(
      success => {
        //debugger
        if (success) {
          this.locarr = success;
          this.ELEMENT_DATA = this.locarr;
          this.dataSource = new MatTableDataSource<IPeople>(this.ELEMENT_DATA);
        } else {
          this.locarr = [];
          this.ELEMENT_DATA = this.locarr;
          this.dataSource = new MatTableDataSource<IPeople>(this.ELEMENT_DATA);
        }
      },
      error => {
        
      }
    );

  //   this.locarr.forEach(element => {
  //     this.locarr.push({"name":element.name , "status":element.status ,"time":element.time,
  //      "usage":element.usage , "volume":element.volume , "cost":element.cost , "total":element.total}) ;
  //  });
    
    
    this.ELEMENT_DATA = this.locarr;

    this.dataSource = new MatTableDataSource<IPeople>(this.ELEMENT_DATA);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    ///setTimeout(() => this.dataSource.sort = this.sort);

  }
   
  checks = false;
  
  selectAll(e){
    if(e.checked==true){
      this.checks=true;
    }
    else{
      this.checks=false;
    }
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

   // this.ELEMENT_DATA = [
    //   {name: 'Kia Potato', status: 'Pending', time: '4.08pm', usage: '730mi', volume: '10.0 diesel', cost: '$4.5', total: '$40'},
    //   {name: 'Lorem lpsm', status: 'Active', time: '5.42pm', usage: '200mi', volume: '5.0 diesel', cost: '$8.75', total: '$50'},
    //   {name: 'Kia Dia', status: 'In Shop', time: '8.09am', usage: '3800mi', volume: '10.0 diesel', cost: '$2.00', total: '$45'},
    //   {name: 'Lello Pariya', status: 'Active', time: '4.08pm', usage: '800mi', volume: '5.0 diesel', cost: '$4.5', total: '$68'},
    //   {name: 'David Lwice', status: 'Pending', time: '5.42pm', usage: '1200mi', volume: '10.0 diesel', cost: '$8.75', total: '$74'},
    //   {name: 'Robert Langdon', status: 'In Shop', time: '8.09am', usage: '880mi', volume: '5.0 diesel', cost: '$2.00', total: '$50'},
    //   {name: 'Harry Potter', status: 'Active', time: '4.08pm', usage: '900mi', volume: '10.0 diesel', cost: '$4.5', total: '$82'},
    //   {name: 'Rocky', status: 'Pending', time: '5.08pm', usage: '200mi', volume: '12.0 diesel', cost: '$5.5', total: '$72'},
    //   {name: 'Mansoor', status: 'Active', time: '2.36pm', usage: '400mi', volume: '19.0 diesel', cost: '$6.5', total: '$22'},
    //   {name: 'Rakesh', status: 'In Shop', time: '3.32pm', usage: '1200mi', volume: '20.0 diesel', cost: '$9.3', total: '$56'},
    //   {name: 'Larry', status: 'Pending', time: '6.40pm', usage: '2650mi', volume: '7.3 diesel', cost: '$8.5', total: '$35'},
    //   {name: 'Austin', status: 'Active', time: '3.35pm', usage: '500mi', volume: '8.0 diesel', cost: '$5.5', total: '$62'},
    //   {name: 'Ron Perry', status: 'In Shop', time: '5.45pm', usage: '1400mi', volume: '13.0 diesel', cost: '$15.5', total: '$52'},
    //   {name: 'Martin', status: 'Active', time: '4.45pm', usage: '2300mi', volume: '16.0 diesel', cost: '$7.5', total: '$92'},
    //   {name: 'John Lewis', status: 'Pending', time: '7.50pm', usage: '850mi', volume: '13.0 diesel', cost: '$9.75', total: '$32'},
    
    // ];;
}   
