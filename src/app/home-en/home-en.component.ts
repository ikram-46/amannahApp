import { Component } from '@angular/core';
export interface card {
  src: string;
  title: string;
}
@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent {
  cardsen : card[]= [
    {src:"../../assets/eng-services.svg", title:"Engineering offices"},
    {src:"../../assets/contractors.svg", title:"contractors"},
    {src:"../../assets/healthy.svg", title:"healthy"},
    {src:"../../assets/gov-agencies.svg", title:"Government agencies"},
    {src:"../../assets/invest-services.svg", title:"Investment services"},
  ]

}
