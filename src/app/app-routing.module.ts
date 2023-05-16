import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardEnComponent } from './card-en/card-en.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { EServiceComponent } from './e-service/e-service.component'
import { LoginComponent } from './login/login.component';
import { LoginEnComponent } from './login-en/login-en.component';
import { ElectronicServicesPortalComponent } from './electronic-services-portal/electronic-services-portal.component';
import { ContractEOComponent } from './contract-eo/contract-eo.component';


const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'e-service', component: EServiceComponent },
      { path: 'home-en', component: HomeEnComponent },
      { path: 'cardEn', component: CardEnComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login-en', component: LoginEnComponent },
      { path: 'electronic-service-portal', component: ElectronicServicesPortalComponent },
      { path: 'contract-eo', component: ContractEOComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
