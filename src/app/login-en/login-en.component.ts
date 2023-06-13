import { Component } from '@angular/core';

@Component({
  selector: 'app-login-en',
  templateUrl: './login-en.component.html',
  styleUrls: ['./login-en.component.css']
})
export class LoginEnComponent {
  defaultLanguage: String="en";
  form:any={
    username:"",
    mdp:"",
    captcha:""
  }
  userv:any='Choose your identity'
  user:any=true
  changeUser(uv:string){
    this.userv=uv
    if(uv=='Business and government agencies')
    this.user=false;
    else
    this.user=true
    
  }
}
