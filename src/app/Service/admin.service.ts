import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  module(value){
   return this.http.post("https://nxv10258.pythonanywhere.com/modules",value);
  }

  

}
