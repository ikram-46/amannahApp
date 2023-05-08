import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sh-footer',
  templateUrl: './sh-footer.component.html',
  styleUrls: ['./sh-footer.component.css']
})
export class ShFooterComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }
}
