import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatestags',
  templateUrl: './templatestags.component.html',
  styleUrls: ['./templatestags.component.css']
})
export class TemplatestagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 // declared array of months. 
 months = ["January", "Feburary", "March", "April", "May", "June", "July", 
 "August", "September", "October", "November", "December"];

isavailable = false; //variable is set to true  
myClickFunction(event) { 
 this.isavailable = !this.isavailable; 
 // variable is toggled onclick of the button 
} 
changemonths(event) {
 alert("Changed month from the Dropdown"); 
}

}
