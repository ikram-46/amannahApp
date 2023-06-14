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
}
@Component({
  selector: 'app-electronic-services-portal',
  templateUrl: './electronic-services-portal.component.html',
  styleUrls: ['./electronic-services-portal.component.css']
})
export class ElectronicServicesPortalComponent {
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

  cards : card[]= [
    {src:"../../assets/icon1.svg", title:"التعاقد مع مكتب هندسي", action:"بدء الخدمة", link:"/contract-eo" , serviceDetailsLink:"/e-service"},
    {src:"../../assets/icon1.svg", title:"طباعة تصاريح وشهادات", action:"بدء الخدمة", link:"/contract-eo", serviceDetailsLink:"/e-service"},
    {src:"../../assets/icon1.svg", title:"تحديث بيانات مكتب هندسي", action:"بدء الخدمة", link:"/contract-eo", serviceDetailsLink:"/e-service"},
  ]
  services : serviceCard[]= [
    {src:"../../assets/icon1.svg", title:"الإستعلامات", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات"},
    {src:"../../assets/icon1.svg", title:"المشهد الحضري", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات"},
    {src:"../../assets/icon1.svg", title:"المنح والعقارات", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات"},
    {src:"../../assets/icon1.svg", title:"بلاغات وشكاوي 940", description:"يوفر نظام الخدمات الالكترونية جميع الخدمات التي يحتاجها المواطنين في مدينة الرياض الذي يوفر يوفر نظام الخدمات ", action:"الخدمات"},
  ]
}
