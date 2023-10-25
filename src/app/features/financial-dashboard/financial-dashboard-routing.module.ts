import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BriefInformationComponent} from "./pages/brief-information/brief-information.component";
import {GeneralTableComponent} from "./pages/general-table/general-table.component";

const routes: Routes = [
  { path: '', component: GeneralTableComponent},
  { path: 'brief-info', component: BriefInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FinancialDashboardRoutingModule { }
