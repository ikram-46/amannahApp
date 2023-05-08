import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-en',
  templateUrl: './card-en.component.html',
  styleUrls: ['./card-en.component.css']
})
export class CardEnComponent {
  @Input() cardDetails: any;
}
