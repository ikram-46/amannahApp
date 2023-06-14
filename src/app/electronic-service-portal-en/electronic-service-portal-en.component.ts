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
  action:string
}
@Component({
  selector: 'app-electronic-service-portal-en',
  templateUrl: './electronic-service-portal-en.component.html',
  styleUrls: ['./electronic-service-portal-en.component.css']
})
export class ElectronicServicePortalEnComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
  defaultLanguage: String="ar";
  isSideNavOpen = false;

  onSideNavToggled() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
  
  activeTabs: string = "individuals";
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
    {src:"../../assets/icon1.svg", title:"Contracting with an engineering office", action:"Start Service", link:"/contract-eo-en" , serviceDetailsLink:"/e-service-en"},
    {src:"../../assets/icon1.svg", title:"Printing permits and certificates", action:"Start Service", link:"/contract-eo-en", serviceDetailsLink:"/e-service-en"},
    {src:"../../assets/icon1.svg", title:"Updating the information of an engineering office", action:"Start Service", link:"/contract-eo-en", serviceDetailsLink:"/e-service-en"},
  ]
  services : serviceCard[]= [
    {src:"../../assets/icon1.svg", title:"urban landscape", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List"},
    {src:"../../assets/icon1.svg", title:"Licenses and certificates", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List"},
    {src:"../../assets/icon1.svg", title:"Reports and complaints 940", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List"},
    {src:"../../assets/icon1.svg", title:"Financial grants and real estate", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List"},
  ]
}
