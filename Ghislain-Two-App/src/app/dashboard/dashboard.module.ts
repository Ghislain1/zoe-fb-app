import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from '../shared/pieChart/pieChart.component';
import { StatsCardComponent } from '../shared/statsCard/statsCard.component';
import { DashboardService } from './dashboard.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ChartsModule } from 'ng2-charts';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { HttpModule } from "@angular/http";
import { Ng2Timeline } from 'ng2-timeline';


@NgModule({
  imports: [

    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpModule,
    ChartsModule,
    RoundProgressModule,
    CommonModule
  ],
  declarations: [DashboardComponent, StatsCardComponent, PieChartComponent],
  providers: [DashboardService],
  exports: []
})
export class DashboardModule { }
