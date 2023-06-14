import { Component } from '@angular/core';
export interface question {
  id: string,
  title: string;
  response: step[];
}

export interface step {
  order: string;
  content: string;
}

export interface card {
  src: string;
  title: string;
  action: string;
}

export interface topCard {
  src: string;
  title: string;
  time: string;
}

@Component({
  selector: 'app-eservice-en',
  templateUrl: './eservice-en.component.html',
  styleUrls: ['./eservice-en.component.css']
})
export class EServiceEnComponent {
  defaultLanguage: String="en";
  panelOpenState = false;
  activeQuestion: string = "1";
  showElement: boolean = true;
  

  toggleElement(questionId:string) {
    this.activeQuestion= questionId;
  }
  questions: question[] = [
    {
      id:"1",
      title: 'Procedures for using the service',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
      ],
    },
    {
      id:"2",
      title: 'stipulations',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
        { order: '3', content: 'Selecting electronic services' },
        ],
    },
    
    { id:"3",
      title: 'attachments',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
      ],
    }
  ];

  cards : card[]= [
    {src:"../../assets/icon1.svg", title:"Contracting with an engineering office", action:"Start service"},
    {src:"../../assets/icon1.svg", title:"Printing permits and certificates", action:"Start service"},
    {src:"../../assets/icon1.svg", title:"Updating engineering office Informations", action:"Start service"},
  ]

  topCards : topCard[]= [
    {src:"../../assets/cardsIcons/time-icon.svg", title:"Service execution time", time:"Working day"},
    {src:"../../assets/cardsIcons/list-icon.svg", title:"Service charges", time:"Based on the Tariff list"},
    {src:"../../assets/cardsIcons/list-icon.svg", title:"Payment channels", time:"Payment system"},
  ]

}
