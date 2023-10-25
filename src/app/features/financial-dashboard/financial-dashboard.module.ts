import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralTableComponent} from "./pages/general-table/general-table.component";
import { BriefInformationComponent } from './pages/brief-information/brief-information.component';
import {FinancialDashboardRoutingModule} from "./financial-dashboard-routing.module";



@NgModule({
  declarations: [GeneralTableComponent, BriefInformationComponent],
  imports: [
    CommonModule,
    FinancialDashboardRoutingModule
  ]
})
export class FinancialDashboardModule { }
