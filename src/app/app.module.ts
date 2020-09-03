import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { SummaryComponent } from './summary/summary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import { ReginalComponent } from './reginal/reginal.component';
import {AccordionModule} from 'primeng/accordion';
import { PrimeComponent } from './prime/prime.component';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    MenuComponent,
    ReginalComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,AccordionModule,PanelModule,FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
