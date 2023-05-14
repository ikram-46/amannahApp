import { Component } from '@angular/core';


@Component({
  selector: 'app-contract-eo',
  templateUrl: './contract-eo.component.html',
  styleUrls: ['./contract-eo.component.css']
})
export class ContractEOComponent {
  name:any="";
  step=false;
  Next(){
    this.step=true;
  }
}