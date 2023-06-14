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
  link:string;
  serviceDetailsLink: string
}
export interface topCard {
  src: string;
  title: string;
  time: string;
}
@Component({
  selector: 'app-e-service',
  templateUrl: './e-service.component.html',
  styleUrls: ['./e-service.component.css'],
})
export class EServiceComponent {
  defaultLanguage: String="ar";
  panelOpenState = false;
  activeQuestion: string = "1";
  showElement: boolean = true;
  

  toggleElement(questionId:string) {
    this.activeQuestion= questionId;
  }
  questions: question[] = [
    {
      id:"1",
      title: 'اجرائات إستخدام الخدمة',
      response: [
        { order: '1', content: 'رخصة البناء.' },
        { order: '2', content: 'رسم كروكي للموقع.' },
      ],
    },
    {
      id:"2",
      title: 'الإشتراطات',
      response: [
        { order: '1', content: 'رخصة البناء.' },
        { order: '2', content: 'رسم كروكي للموقع.' },
        { order: '3', content: 'رسم كروكي للموقع.' },
      ],
    },
    
    { id:"3",
      title: 'المرفقات',
      response: [
        { order: '1', content: 'رخصة البناء.' },
        { order: '2', content: 'رسم كروكي للموقع.' },
      ],
    }
  ];

  cards : card[]= [
    {src:"../../assets/icon1.svg", title:"التعاقد مع مكتب هندسي", action:"بدء الخدمة", link:"/contact-eo", serviceDetailsLink:"/e-service"},
    {src:"../../assets/icon1.svg", title:"طباعة تصاريح وشهادات", action:"بدء الخدمة ", link:"/contact-eo", serviceDetailsLink:"/e-service"},
    {src:"../../assets/icon1.svg", title:"تحديث بيانات مكتب هندسي", action:" بدء الخدمة", link:"/contact-eo", serviceDetailsLink:"/e-service"},
  ]

  topCards : topCard[]= [
    {src:"../../assets/cardsIcons/time-icon.svg", title:"وقت تنفيذ الخدمة", time:"يوم عمل"},
    {src:"../../assets/cardsIcons/list-icon.svg", title:"رسوم الخدمة", time:"حسب لائحة الرسوم"},
    {src:"../../assets/cardsIcons/list-icon.svg", title:"قنوات دفع الرسوم", time:"نظام سداد للمدفوعات"},
  ]
}
