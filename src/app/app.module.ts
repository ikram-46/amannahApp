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
import { NavbarEnComponent } from './navbar-en/navbar-en.component'

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
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
