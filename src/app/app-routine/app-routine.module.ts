import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';

import { LoginComponent } from '../shared/components/login/login.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),

  },
  {
    path: 'package',
    loadChildren: () => import('../package/package.module').then(m => m.PackageModule),
  },
  {
    path: 'impression',
    loadChildren: () => import('../impression/impression.module').then(m => m.ImpressionModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutineModule { }
