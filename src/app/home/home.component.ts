import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
export interface card {
  src: string;
  title: string;
  action:string,
  link:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  defaultLanguage: String="ar";
  isSideNavOpen = false;

  onSideNavToggled() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
  
  activeTabs: string = "أفراد";
  showAllServices : Boolean= false;
  selectedTabValue(event:any){
    console.log(event);
    this.activeTabs = event.tab.textLabel;
    console.log(this.activeTabs)
  }

  handleShowAllServices (){
    this.showAllServices=true;
  }
 
  indivCards : card[]= [
    {src:"../../assets/cardsIcons/certificates.svg", title:"الرخص والشهادات", action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/cardsIcons/urban.svg", title:"المشهد الحضري",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/cardsIcons/grants.svg", title:"المنح والعقارات",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/cardsIcons/reports.svg", title:"بلاغات وشكاوي 940",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/cardsIcons/queries.svg", title:"الإستعلامات",action:"الخدمات", link:"/electronic-service-portal"},
  ]
  businessCards : card[]= [
    {src:"../../assets/eng-services.svg", title:"مكاتب هندسية",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/contractors.svg", title:"مقاولين",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/healthy.svg", title:"صحية",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/gov-agencies.svg", title:"جهات حكومية",action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/invest-services.svg", title:"خدمات الإستثمار",action:"الخدمات", link:"/electronic-service-portal"},
  ]
  
}

