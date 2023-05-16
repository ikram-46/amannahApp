import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar-en',
  templateUrl: './navbar-en.component.html',
  styleUrls: ['./navbar-en.component.css']
})
export class NavbarEnComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
  defaultLanguage: String="en";
  constructor() { }

  ngOnInit() {
  }
  
  clickHandler() {
    this.sidenav.close();
  }
}
