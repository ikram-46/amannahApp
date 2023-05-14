import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardEnComponent } from './card-en/card-en.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { EServiceComponent } from './e-service/e-service.component'


const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'e-service', component: EServiceComponent },
      { path: 'homeEn', component: HomeEnComponent },
      { path: 'cardEn', component: CardEnComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
