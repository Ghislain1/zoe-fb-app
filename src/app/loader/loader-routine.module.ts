import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './components/uplaoder/uploader.component';
import { DownLoaderComponent } from './components/downlaoder/downloader.component';
import { LoaderComponent } from './components/loader.component';

const loaderRoutes: Routes = [
  { path: 'downUploader', component: DownLoaderComponent }, //Add a the route to redirect to home-desc
  { path: 'appLoader', component: LoaderComponent } // Add the route to call the Home-Descrip Component
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(loaderRoutes) // Registry your  settings route -- Not forRoot!!!
  ],
  exports: [RouterModule]

})
export class LoaderRoutineModule { }
