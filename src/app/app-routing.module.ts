import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardEnComponent } from './card-en/card-en.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { LoginComponent } from './login/login.component';
import { LoginEnComponent } from './login-en/login-en.component';


const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'homeEn', component: HomeEnComponent },
      { path: 'cardEn', component: CardEnComponent },
      { path: 'login', component: LoginComponent },
      { path: 'loginEn', component: LoginEnComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
