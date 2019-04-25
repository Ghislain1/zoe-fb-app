import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { ClassicUrlGuard } from '../shared/services/classic-url.guard';
import { PackageListComponent } from '../package/components/package-list/package-list.component';

const appRoutes: Routes = [
                          {
                            path: '',
                            canActivate: [ClassicUrlGuard],
                            redirectTo : 'package',
                            pathMatch: 'full'

                          },
                          {
                            path: 'admin',
                            loadChildren: '../admin/admin.module#AdminModule'
                          },
                          {
                            path: 'package',
                            loadChildren: '../package/package.module#PackageModule'
                          },
                          {
                            path: 'impression',
                            loadChildren: '../impression/impression.module#ImpressionModule'
                          },
                          {
                            path: '**',
                            redirectTo: ''
                          }

                        ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutineModule { }
