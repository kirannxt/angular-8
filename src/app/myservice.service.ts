import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Curd  } from '../app/example/curd.model';
import { Observable } from 'rxjs';

import "rxjs/Rx"


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // private apiurl = "http://jsonplaceholder.typicode.com/users";
  private apiurl = "http://localhost:8956/gets";
  constructor(private http: HttpClient) { }
  

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
    return this.http.delete(`http://localhost:8956/gets/${id}`);
  }


  getData() {
    return this.http.get(this.apiurl);
 }
 
  getPut(id:number) {

    return this.http.get(`http://localhost:8956/gets/${id}`)//, options)
        .map(
          (response: Curd) => {
          return response

        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }


  putdata(id:number,datas:Curd){
    return this.http.put(`http://localhost:8956/gets/${id}`,datas); 

  }
  }
