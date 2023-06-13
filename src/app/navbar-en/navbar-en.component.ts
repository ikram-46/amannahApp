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
    {route :"/electronic-service-portal",title:"مكاتب هندسية", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل وليس",icon:"../../assets/eng-services.svg" },
    {route :"/electronic-service-portal",title:"مقاولين", description:"شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ", icon:"../../assets/contractors.svg"},
    {route :"/electronic-service-portal",title:"صحية", description:" إيبسوم هو ببساطة نص شكلي", icon:"../../assets/healthy.svg"},
    {route :"/electronic-service-portal",title:"جهات حكومية", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل وليس المحتوى) ", icon:"../../assets/gov-agencies.svg"},
    {route :"/electronic-service-portal",title:"خدمات الإستثمار", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل المحتوى) ", icon:"../../assets/invest-services.svg"},
  ]
  mobileServicesLinks : serviceLink[]= [
    {route :"/electronic-service-portal",title:"مكاتب هندسية", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل وليس",icon:"../../assets/navbarIcons/eng-services-mb.svg" },
    {route :"/electronic-service-portal",title:"مقاولين", description:"شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ", icon:"../../assets/navbarIcons/contractors-mb.svg"},
    {route :"/electronic-service-portal",title:"صحية", description:" إيبسوم هو ببساطة نص شكلي", icon:"../../assets/navbarIcons/healthy-mb.svg"},
    {route :"/electronic-service-portal",title:"جهات حكومية", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل وليس المحتوى) ", icon:"../../assets/navbarIcons/gov-agencies-mb.svg"},
    {route :"/electronic-service-portal",title:"خدمات الإستثمار", description:" إيبسوم هو ببساطة نص شكلي أن الغاية هي الشكل المحتوى) ", icon:"../../assets/navbarIcons/invest-services-mb.svg"},
  ]

  usedLinks : usedLink[]= [
    {route :"",title:"الإستعلام عن طلب دفن مشائم واعضاء بشرية",icon:"../../assets/navbarIcons/comment.svg" },
    {route :"",title:"إضافة مقاولي العقد والتأمين", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"صندوق طلبت التنسيق الواردة من المقاول ", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"شهادة اشغال لرخصة بناء", icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"نقل ملكية لرخصة بناء",  icon:"../../assets/navbarIcons/comment.svg"},
    {route :"",title:"إستعلام عن طلبات التجديد",  icon:"../../assets/navbarIcons/comment.svg"},
  ]

}
