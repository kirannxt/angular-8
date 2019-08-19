import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Components',
  templateUrl: './Components.component.html',
  styleUrls: ['./Components.component.css']
})
export class ComponentsComponent implements OnInit {

  app='Angular';
  constructor() { }

  msg(){
    alert('Hello.....!!!!')
  }
    
  ngOnInit() {
  }

}
