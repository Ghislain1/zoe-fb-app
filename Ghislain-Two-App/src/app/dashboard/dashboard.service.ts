import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Injectable } from '@angular/core';


@Injectable()
export class DashboardService {

  constructor() {

    this.log('Init() is finished successfully!!');
  }


  public log(taskName: string) {
    console.log("DashboardService says: " + taskName);
  }
}
