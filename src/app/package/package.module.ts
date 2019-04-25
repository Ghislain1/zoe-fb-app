import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './components/package-list/package-list.component';
import { Routes, RouterModule } from '@angular/router';
import { Datum } from '../home/Models/package';

const packageRoutes: Routes = [
  {
    path: '',
    component: PackageListComponent
  }
];


@NgModule({
  declarations: [PackageListComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(packageRoutes)
  ],
  exports: [PackageListComponent]
})
export class PackageModule {

  list:   Datum [];
 constructor () {

 }

 }
