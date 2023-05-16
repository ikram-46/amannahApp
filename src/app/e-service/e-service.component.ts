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
  selector: 'app-e-service',
  templateUrl: './e-service.component.html',
  styleUrls: ['./e-service.component.css'],
})
export class EServiceComponent {
  panelOpenState = false;
  activeQuestion: string = "4";
  showElement: boolean = true;
  

  toggleElement(questionId:string) {
    this.activeQuestion= questionId;
  }
  questions: question[] = [
    {
      id:"1",
      title: 'كيف استعلم عن معاملة ادارية؟',
      response: [
        { order: '1', content: 'بتسجيل الدخول على البوابة الإلكترونية' },
        { order: '2', content: 'اختيار الخدمات الإلكترونية' },
        {
          order: '3',
          content: 'اختيار نظام سداد ثم اختيار الاستعلام عن فاتورة سداد',
        },
        { order: '4', content: 'طريقة معرفة تفاصيل الفواتير وطباعتها؟' },
      ],
    },
    {
      id:"2",
      title: 'هل بإمكاني طباعة الرخصة من الموقع؟',
      response: [
        { order: '1', content: 'بتسجيل الدخول على البوابة الإلكترونية' },
        { order: '2', content: ' الخدمات الإلكترونية' },
        {
          order: '3',
          content: 'اختيار نظام سداد ثم اختيار الاستعلام عن فاتورة سداد',
        },
        { order: '4', content: 'طريقة معرفة تفاصيل الفواتير وطباعتها؟' },
      ],
    },
    
    { id:"3",
      title: 'كيف احسب رسوم الخدمات ؟',
      response: [
        { order: '1', content: 'بتسجيل الدخول على البوابة الإلكترونية' },
        { order: '2', content: 'اختيار الخدمات الإلكترونية' },
        {
          order: '3',
          content: 'اختيار نظام سداد ثم اختيار الاستعلام عن فاتورة سداد',
        },
        { order: '4', content: 'طريقة معرفة تفاصيل الفواتير وطباعتها؟' },
      ],
    },
    { id:"4",
      title: 'طريقة معرفة تفاصيل الفواتير وطباعتها؟',
      response: [
        { order: '1', content: 'بتسجيل الدخول على البوابة الإلكترونية' },
        { order: '2', content: 'اختيار الخدمات الإلكترونية' },
        {
          order: '3',
          content: 'اختيار نظام سداد ثم اختيار الاستعلام عن فاتورة سداد',
        },
        { order: '4', content: 'طريقة معرفة تفاصيل الفواتير وطباعتها؟' },
      ],
    },
  ];

  cards : card[]= [
    {src:"../../assets/icon1.svg", title:"التعاقد مع مكتب هندسي", action:"تفاصيل الخدمة"},
    {src:"../../assets/icon1.svg", title:"طباعة تصاريح وشهادات", action:"تفاصيل الخدمة"},
    {src:"../../assets/icon1.svg", title:"تحديث بيانات مكتب هندسي", action:"تفاصيل الخدمة"},
  ]
}
