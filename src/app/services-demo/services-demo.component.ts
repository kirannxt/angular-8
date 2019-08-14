import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.css']
})
export class ServicesDemoComponent implements OnInit {

  constructor(private obj:MyserviceService) { }
    Hello(){
      this.obj.display();
    }
  ngOnInit() {
  }


}
