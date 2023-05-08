import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-footer-en',
  templateUrl: './footer-en.component.html',
  styleUrls: ['./footer-en.component.css']
})
export class FooterEnComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }

}
