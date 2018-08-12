import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';
import { AlbumRoutineModule } from './album.routine.module';
import { AlbumComponent } from './components/album.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutineModule
  ],
  declarations: [AlbumComponent],
  providers: [AlbumService]
})
export class AlbumModule { }
