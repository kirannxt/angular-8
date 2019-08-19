import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(    private router: Router,
  ) { }

  ngOnInit() {
  }

  onclickSubmit(data:NgForm){

    const value=data.value

    if(value.userName=="admin" && value.password=="admin"){
      this.router.navigate(['/Home']);

    }
    else{
      alert("Invaild User Name and Password")
    }
  }
}
