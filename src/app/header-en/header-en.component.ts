import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-en',
  templateUrl: './header-en.component.html',
  styleUrls: ['./header-en.component.css']
})
export class HeaderEnComponent {
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
