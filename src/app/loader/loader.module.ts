import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderRoutineModule } from './loader-routine.module';

import { UploaderComponent } from './components/uplaoder/uploader.component';
import { DownLoaderComponent } from './components/downlaoder/downloader.component';
import { LoaderComponent } from './components/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoaderRoutineModule,
  ],
  declarations: [LoaderComponent, UploaderComponent, DownLoaderComponent],
  providers: []
})
export class LoaderModule { }
