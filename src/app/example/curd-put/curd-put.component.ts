import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MyserviceService } from '../../myservice.service';
import { Curd } from '../curd.model';

@Component({
  selector: 'app-curd-put',
  templateUrl: './curd-put.component.html',
  styleUrls: ['./curd-put.component.css']
})
export class CurdPutComponent implements OnInit {

  constructor(
    private myservice:MyserviceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
id:number;
editMode=false;

formdata=new FormGroup({
  'userName':new FormControl(''),
  'firstName':new FormControl(''),
  'lastName':new FormControl(''),
  'email':new FormControl(''),
  'password':new FormControl('')

})

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
  this.initForm();
      }
    );
  }

  private initForm() {


    if (this.editMode) {
  this.myservice.getPut(this.id)
  .subscribe(
    (data)=>{
    
  this.formdata.setValue({
    userName:data.userName,
    firstName:data.firstName,
    lastName:data.lastName,
    email:data.email,
    password:data.password
  })
    }
  )
    }
  
  }
  onClickSubmit(data:NgForm){
    if(confirm("Are you sure you want to update")==true){
    const datas=data.value

    console.log("from Data are",datas)

    const FormModelsData=new Curd(datas.userName,
                                  datas.firstName,
                                  datas.lastName,
                                  datas.password,
                                  datas.email
    )

    this.myservice.putdata(this.id,FormModelsData)
    .subscribe(
      (data)=>{
        alert("Data Updated Successfully"),
        this.router.navigate(['/curd']);
      },
      (error)=>alert("Something went wrong")
    )
  }

else{
  this.router.navigate(['/curd-put',this.id]);

}
  }
}
