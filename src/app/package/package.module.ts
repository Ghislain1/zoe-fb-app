import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './components/package-list/package-list.component';
import { Routes, RouterModule } from '@angular/router';

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

  list:   string [];
 constructor () {

 }

 }
