import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  public persondata=[];
  constructor(private obj:MyserviceService) { }

  ngOnInit() {
    this.obj.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
      
   },
  (error)=>console.log("Somthing Went wrong"));
  }

}
