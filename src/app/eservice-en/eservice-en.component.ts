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

@Component({
  selector: 'app-eservice-en',
  templateUrl: './eservice-en.component.html',
  styleUrls: ['./eservice-en.component.css']
})
export class EServiceEnComponent {
  defaultLanguage: String="en";
  panelOpenState = false;
  activeQuestion: string = "4";
  showElement: boolean = true;
  

  toggleElement(questionId:string) {
    this.activeQuestion= questionId;
  }
  questions: question[] = [
    {
      id:"1",
      title: 'How do I inquire about an administrative transaction ?',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
        {
          order: '3',
          content: 'Selecting the payment system and then choosing to inquire about a payment invoice',
        },
        { order: '4', content: 'ntering the identification number and invoice number, then clicking on search, and then selecting to print the invoice to view the details' },
      ],
    },
    {
      id:"2",
      title: 'Can I print the license from the website?',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
        {
          order: '3',
          content: 'Selecting the payment system and then choosing to inquire about a payment invoice',
        },
        { order: '4', content: 'ntering the identification number and invoice number, then clicking on search, and then selecting to print the invoice to view the details' },
      ],
    },
    
    { id:"3",
      title: 'How do I calculate service fees?',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
        {
          order: '3',
          content: 'Selecting the payment system and then choosing to inquire about a payment invoice',
        },
        { order: '4', content: 'ntering the identification number and invoice number, then clicking on search, and then selecting to print the invoice to view the details' },
      ],
    },
    { id:"4",
      title: 'How to know the invoice details and print them?',
      response: [
        { order: '1', content: 'by logging in to the electronic portal' },
        { order: '2', content: 'Selecting electronic services' },
        { order: '3', content: 'Selecting electronic services' },
        {
          order: '4',
          content: 'Selecting the payment system and then choosing to inquire about a payment invoice',
        },
        { order: '5', content: 'ntering the identification number and invoice number, then clicking on search, and then selecting to print the invoice to view the details' },
      ],
    },
  ];

  cards : card[]= [
    {src:"../../assets/icon1.svg", title:"Contracting with an engineering office", action:"تفاصيل الخدمة"},
    {src:"../../assets/icon1.svg", title:"Printing permits and certificates", action:"تفاصيل الخدمة"},
    {src:"../../assets/icon1.svg", title:"Updating engineering office Informations", action:"تفاصيل الخدمة"},
  ]

}
