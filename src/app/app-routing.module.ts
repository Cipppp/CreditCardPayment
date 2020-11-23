import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "credit-form", component: CreditFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
