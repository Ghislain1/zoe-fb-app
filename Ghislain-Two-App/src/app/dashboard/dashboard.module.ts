import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from '../shared/pieChart/pieChart.component';
import { StatsCardComponent } from '../shared/statsCard/statsCard.component';
import { DashboardService } from './dashboard.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";


@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //ChartsModule,
    //RoundProgressModule,

    CommonModule
  ],
  declarations: [DashboardComponent, StatsCardComponent, PieChartComponent],
  providers: [DashboardService],
  exports: [DashboardService]
})
export class DashboardModule { }
