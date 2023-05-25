import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-eoen',
  templateUrl: './contract-eoen.component.html',
  styleUrls: ['./contract-eoen.component.css']
})
export class ContractEOEnComponent {
  defaultLanguage: String="en";
  name:any="";
  step=false;
  Next(){
    this.step=true;
  }
}
