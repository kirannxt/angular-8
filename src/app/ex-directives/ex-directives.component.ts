import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-directives',
  templateUrl: './ex-directives.component.html',
  styleUrls: ['./ex-directives.component.css']
})
export class ExDirectivesComponent implements OnInit {
  title='Directives Examples'
  exMonths=[
    {
      "Sl_no":1,
      "Months":"Jan"
    },
    {
      "Sl_no":2,
      "Months":"Feb"
    },
    {
      "Sl_no":3,
      "Months":"Mar"
    },
    {
      "Sl_no":4,
      "Months":"Apr"
    }
  ]

  isDisable=false;

  onClickFunction(){
    if(this.isDisable==true)
    {
      this.isDisable=false
    }
    else
    {
      this.isDisable=true
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
