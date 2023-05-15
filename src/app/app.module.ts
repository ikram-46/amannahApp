import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ShFooterComponent } from './sh-footer/sh-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardEnComponent } from './card-en/card-en.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { HeaderComponent } from './header/header.component';
import { HeaderEnComponent } from './header-en/header-en.component';
import { FooterEnComponent } from './footer-en/footer-en.component';
import { EServiceComponent } from './e-service/e-service.component'
import { LoginComponent } from './login/login.component';
import { LoginEnComponent } from './login-en/login-en.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarEnComponent } from './navbar-en/navbar-en.component';
import { ElectronicServicesPortalComponent } from './electronic-services-portal/electronic-services-portal.component';
import { FindServiceComponent } from './find-service/find-service.component';
import { FindServiceEnComponent } from './find-service-en/find-service-en.component'
import { ContractEOComponent } from './contract-eo/contract-eo.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ShFooterComponent,
    CardEnComponent,
    HomeEnComponent,
    HeaderComponent,
    HeaderEnComponent,
    FooterEnComponent,
    EServiceComponent,
    LoginComponent,
    LoginEnComponent,
    NavbarComponent,
    NavbarEnComponent,
    ElectronicServicesPortalComponent,
    FindServiceComponent,
    FindServiceEnComponent,
    ContractEOComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
