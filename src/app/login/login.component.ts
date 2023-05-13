import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form:any={
  username:"",
  mdp:"",
  captcha:""
}
userv:any='إختر هويتك'
user:any=true
changeUser(uv:string){
  this.userv=uv
  if(uv=='الأعمال والجهات الحكومية')
  this.user=false;
  else
  this.user=true
  
}
}
