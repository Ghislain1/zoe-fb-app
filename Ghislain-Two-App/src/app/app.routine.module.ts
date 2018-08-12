import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';

// Layouts
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule' // <namespace>#<ModuleClassName>
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: {
          title2: 'Dashboard'
        }
      },
      {
        path: 'album',
        loadChildren: './album/album.module#AlbumModule'
      },
      /*   {
          path: 'form',
          loadChildren: './form/form.module#FormModule'
        },
           {
             path: 'widget',
             children: [
               {
                 path: '',
                 pathMatch: 'full',
                 redirectTo: 'widget/main'
               },
               {
                 path: 'main',
                 loadChildren: './widgets/main/main.module#MainWidgetModule'
               },
               {
                 path: 'table',
                 loadChildren: './widgets/tables/tables.module#TablesWidgetModule'
               },
               {
                 path: 'chart',
                 loadChildren: './widgets/charts/charts.module#ChartsWidgetModule'
               }
             ]
           } */

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
