import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  emailid; 
  formdata;
  constructor(private obj: MyserviceService) { }  
  ngOnInit() { 
     this.formdata = new FormGroup({ 
        emailid: new FormControl("angular@gmail.com"),
        passwd: new FormControl("abcd1234") 
     }); 
  } 
  onClickSubmit(data) {this.emailid = data.emailid;}
}
