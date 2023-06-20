import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
export interface card {
  src: string;
  title: string;
  action: string;
  link:string;
  serviceDetailsLink:string;
}
export interface serviceCard {
  src: string;
  title: string;
  description: string;
  action:string;
  link :string;
}
@Component({
  selector: 'app-e-services',
  templateUrl: './e-services.component.html',
  styleUrls: ['./e-services.component.css']
})
export class EServicesComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
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
  clickHandler() {
    this.sidenav.close();
  }
  services : serviceCard[]= [
    {src:"../../assets/Icons/licences.svg", title:"الرخص والشهادات ", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/Icons/urban.svg", title:"المشهد الحضري", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/Icons/grants.svg", title:"المنح والعقارات", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/Icons/reports.svg", title:"بلاغات وشكاوي 940", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات", link:"/electronic-service-portal"},
    {src:"../../assets/Icons/queries.svg", title:"الإستعلامات", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات", link:"/electronic-service-portal"},
    
  ]
}
