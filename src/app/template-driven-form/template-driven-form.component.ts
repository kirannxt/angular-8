import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

 constructor(private myservice: MyserviceService) { } 

  ngOnInit() { } 
  onClickSubmit(formdata :NgForm) {
    const value=formdata.value
    console.log("Form Data",value)
    this.myservice.msg(value);
  }
}
