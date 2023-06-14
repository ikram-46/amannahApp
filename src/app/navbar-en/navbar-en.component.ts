import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
export interface serviceLink {
  route: string;
  title: string;
  description:string;
  icon: string
}

export interface usedLink {
  route: string;
  title: string;
  icon: string
}
@Component({
  selector: 'app-navbar-en',
  templateUrl: './navbar-en.component.html',
  styleUrls: ['./navbar-en.component.css']
})
export class NavbarEnComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
  showSubmenu: boolean = false;
  panelOpenState = false;
  defaultLanguage: String="ar";
  @Output() sideNavToggled = new EventEmitter<void>();

  toggleSideNav() {
    this.sideNavToggled.emit();
  }

  ngOnInit() {
  }
  
  clickHandler() {
    this.sidenav.close();
  }
  servicesLinks : serviceLink[]= [
    {route :"/electronic-service-portal",title:"Engineering offices", description:"Le Lorem Ipsum est simplement du faux texte employé dans",icon:"../../assets/navbarIcons/green-comment-icon.svg" },
    {route :"/electronic-service-portal",title:"Contractors", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/navbarIcons/green-files-icon.svg"},
    {route :"/electronic-service-portal",title:"Healthy", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/navbarIcons/green-comment-icon.svg"},
    {route :"/electronic-service-portal",title:"Government entities", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/navbarIcons/green-comment-icon.svg"},
    {route :"/electronic-service-portal",title:"Investment services", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/navbarIcons/green-comment-icon.svg"},
  ]
  mobileServicesLinks : serviceLink[]= [
    {route :"/electronic-service-portal",title:"Engineering offices", description:"Le Lorem Ipsum est simplement du faux texte employé dans",icon:"../../assets/eng-services.svg" },
    {route :"/electronic-service-portal",title:"Contractors", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/contractors.svg"},
    {route :"/electronic-service-portal",title:"Healthy", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/healthy.svg"},
    {route :"/electronic-service-portal",title:"Government entities", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/gov-agencies.svg"},
    {route :"/electronic-service-portal",title:"Investment services", description:"Le Lorem Ipsum est simplement du faux texte employé dans", icon:"../../assets/invest-services.svg"},
  ]

  usedLinks : usedLink[]= [
    {route :"",title:"Inquiry about a request for burying curses and human organs.",icon:"../../assets/navbarIcons/comment.svg" },
    {route :"",title:"Adding contract and insurance contractors.", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"Box of coordination requests received from the contractor.", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"Certificate of completion for a building permit", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"Transfer of ownership for a building permit.",  icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"Inquiry about renewal requests.",  icon:"../../assets/navbarIcons/comment.svg"},
  ]

}
