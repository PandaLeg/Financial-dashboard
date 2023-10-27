import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralTableComponent} from "./pages/general-table/general-table.component";
import { BriefInformationComponent } from './pages/brief-information/brief-information.component';
import {FinancialDashboardRoutingModule} from "./financial-dashboard-routing.module";
import {GeneralTableService} from "./services/general-table.service";
import {HttpClientModule} from "@angular/common/http";
import { FilteringFormComponent } from './components/general-table/filtering-form/filtering-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DateFormComponent } from './components/brief-information/date-form/date-form.component';



@NgModule({
  declarations: [GeneralTableComponent, BriefInformationComponent, FilteringFormComponent, DateFormComponent],
  imports: [
    CommonModule,
    FinancialDashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GeneralTableService]
})
export class FinancialDashboardModule { }
