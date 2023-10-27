import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {FinancialDashboardModule} from "./features/financial-dashboard/financial-dashboard.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FinancialDashboardModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
