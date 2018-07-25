import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AlbumService]
})
export class CoreModule { }
