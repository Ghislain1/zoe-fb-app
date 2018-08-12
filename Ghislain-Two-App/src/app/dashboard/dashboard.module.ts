import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpModule,
    CommonModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  exports: [DashboardComponent]
})
export class DashboardModule { }
