import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './components/package-list/package-list.component';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
=======

>>>>>>> 2457b2d36c1f5bf9246c04f2d40f7afc2e6bcb2f
const packageRoutes: Routes = [
  {
    path: '',
    component: PackageListComponent
<<<<<<< HEAD
  }

];


=======
  },

  {
    path: 'app-package-list',
    component: PackageListComponent
  }
];
>>>>>>> 2457b2d36c1f5bf9246c04f2d40f7afc2e6bcb2f
@NgModule({
  declarations: [PackageListComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
     RouterModule.forChild(packageRoutes)
  ]
})
export class PackageModule {

  list:   string [];
 constructor () {

 }

 }
=======
    RouterModule,
    RouterModule.forChild(packageRoutes)
  ],
  exports: [PackageListComponent]
})
export class PackageModule { }
>>>>>>> 2457b2d36c1f5bf9246c04f2d40f7afc2e6bcb2f
