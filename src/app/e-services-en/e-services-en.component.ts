import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

export interface serviceCard {
  src: string;
  title: string;
  description: string;
  action:string;
  link: string;
}
@Component({
  selector: 'app-e-services-en',
  templateUrl: './e-services-en.component.html',
  styleUrls: ['./e-services-en.component.css']
})
export class EServicesEnComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
  defaultLanguage: String="en";
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

  services : serviceCard[]= [
    {src:"../../assets/Icons/urban.svg", title:"urban landscape", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List", link:"/electronic-service-portal-en"},
    {src:"../../assets/Icons/licences.svg", title:"Licenses and certificates", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List", link:"/electronic-service-portal-en"},
    {src:"../../assets/Icons/reports.svg", title:"Reports and complaints 940", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List", link:"/electronic-service-portal-en"},
    {src:"../../assets/Icons/grants.svg", title:"Financial grants and real estate", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List", link:"/electronic-service-portal-en"},
    {src:"../../assets/Icons/queries.svg", title:"Queries", description:"The electronic services system provides all the services that citizens need in the city of Riyadh, which provides a system of...", action:"Services List", link:"/electronic-service-portal-en"},
  ]
}
