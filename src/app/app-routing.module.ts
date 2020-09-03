import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ReginalComponent } from './reginal/reginal.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  {path:'summary', component:SummaryComponent},
  {path:'reginal', component:ReginalComponent},
  {path:'prime', component:PrimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
