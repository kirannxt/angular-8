import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curd-get',
  templateUrl: './curd-get.component.html',
  styleUrls: ['./curd-get.component.css']
})
export class CurdGetComponent implements OnInit {

  constructor(
    private myservice:MyserviceService,
    private router: Router) { }

  userData=[];
  ngOnInit() {

    this.myservice.getDatas()
    .subscribe(
      (data)=>{
        this.userData = Array.from(Object.keys(data), k=>data[k]);
      }
    )
  }

  onDelete(numb:number){
this.myservice.getdelete(numb)
.subscribe(()=>{alert("Record Deleted")
this.router.navigate(['/curd'])},
(error)=>alert("Somthing went wrong")
)
  }

}
