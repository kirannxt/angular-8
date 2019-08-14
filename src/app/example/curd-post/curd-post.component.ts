import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

import { Curd } from '../curd.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curd-post',
  templateUrl: './curd-post.component.html',
  styleUrls: ['./curd-post.component.css']
})
export class CurdPostComponent implements OnInit {

  constructor(
    private myservice:MyserviceService,
    private router: Router,
  
  ) { }

  ngOnInit() {
  }

  onclickSubmit(data:NgForm){
    const datas=data.value

    console.log("from Data are",datas)

    const FormModelsData=new Curd(datas.userName,
                                  datas.firstName,
                                  datas.lastName,
                                  datas.password,
                                  datas.email
    )

    this.myservice.postdata(FormModelsData)
    .subscribe(
      (data)=>{
        alert("Data Saved Successfully"),
        this.router.navigate(['/curd']);
      },
      (error)=>alert("Something went wrong")
    )
  }
}
