import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-pipes',
  templateUrl: './ex-pipes.component.html',
  styleUrls: ['./ex-pipes.component.css']
})
export class ExPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title="Example"
  todaydate = new Date(); 
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
      "Sept", "Oct", "Nov", "Dec"]; 
}

