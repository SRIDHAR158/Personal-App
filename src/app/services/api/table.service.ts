import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  
  private _url: string = "http://localhost:8082/table/tablereport";

  constructor(private http : HttpClient) { }

  doGetWithParams(successCallBack, errorCallBack) {
    this.http.get(this._url).subscribe(response => {
      successCallBack(response);
    }, error => {
      errorCallBack(error);          
    });
  }
}
