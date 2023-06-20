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
import { EServiceEnComponent } from './eservice-en/eservice-en.component';
import { ContractEOEnComponent } from './contract-eo-en/contract-eo-en.component';
import { ElectronicServicePortalEnComponent } from './electronic-service-portal-en/electronic-service-portal-en.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CodeConfirmationComponent } from './code-confirmation/code-confirmation.component';
import { EServicesComponent } from './e-services/e-services.component';
import { EServicesEnComponent } from './e-services-en/e-services-en.component';


const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'e-service', component: EServiceComponent },
      { path: 'e-service-en', component: EServiceEnComponent },
      { path: 'home-en', component: HomeEnComponent },
      { path: 'cardEn', component: CardEnComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login-en', component: LoginEnComponent },
      { path: 'electronic-service-portal', component: ElectronicServicesPortalComponent },
      { path: 'electronic-service-portal-en', component: ElectronicServicePortalEnComponent },
      { path: 'contract-eo', component: ContractEOComponent },
      { path: 'contract-eo-en', component: ContractEOEnComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'code-confirmation', component: CodeConfirmationComponent },
      { path: 'e-services', component: EServicesComponent },
      { path: 'e-services-en', component: EServicesEnComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
