import { Component } from '@angular/core';
export interface card {
  src: string;
  title: string;
  action:string,
  link:string
}
@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent {
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

  handleShowAllServices (){
    this.showAllServices=true;
  }
 
  indivCards : card[]= [
    {src:"../../assets/eng-services.svg", title:"Engineering offices",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/contractors.svg", title:"contractors",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/healthy.svg", title:"healthy",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/gov-agencies.svg", title:"Government agencies ",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/invest-services.svg", title:"Investment services",action:"Service", link:"/electronic-service-portal"},
  ]
  businessCards : card[]= [
    {src:"../../assets/eng-services.svg", title:"Engineering offices",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/contractors.svg", title:"contractors",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/healthy.svg", title:"healthy",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/gov-agencies.svg", title:"Government agencies ",action:"Service", link:"/electronic-service-portal"},
    {src:"../../assets/invest-services.svg", title:"Investment services",action:"Service", link:"/electronic-service-portal"},
  ]

}
