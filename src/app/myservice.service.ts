import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Curd  } from '../app/example/curd.model';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // private apiurl = "http://jsonplaceholder.typicode.com/users";
  private apiurl = "http://localhost:8956/posts";
  constructor(private http: HttpClient) { }
  getData() {
     return this.http.get(this.apiurl);
  }

  postdata(data:Curd){
    return this.http.post(this.apiurl,data)
  }
  msg(data:any){
    console.log("Data From Service Class",data)
    console.log("The Email Id from template Driven form "+data.emailid)
     //alert('Hello ..... World!'+ "  " + email);
   }

   display(){
    alert('Hello ..... World!');
   }


   getDatas() {
  
    return this.http.get(this.apiurl)
  }

  getdelete(id:number){
    return this.http.delete(`http://localhost:8956/posts/${id}`);
  }

  }
