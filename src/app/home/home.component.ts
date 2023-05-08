import { Component } from '@angular/core';
export interface card {
  src: string;
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards : card[]= [
    {src:"../../assets/eng-services.svg", title:"مكاتب هندسية"},
    {src:"../../assets/contractors.svg", title:"مقاولين"},
    {src:"../../assets/healthy.svg", title:"صحية"},
    {src:"../../assets/gov-agencies.svg", title:"جهات حكومية"},
    {src:"../../assets/invest-services.svg", title:"خدمات الإستثمار"},
  ]
  
}
