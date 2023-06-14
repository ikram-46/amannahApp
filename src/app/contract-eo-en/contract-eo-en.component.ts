import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-eo-en',
  templateUrl: './contract-eo-en.component.html',
  styleUrls: ['./contract-eo-en.component.css']
})
export class ContractEOEnComponent {
  defaultLanguage: String="en";
  name:any="";
  step=false;
  Next(){
    this.step=true;
  }
}
