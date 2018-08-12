import { NgModule } from '@angular/core';

import { AlbumComponent } from './components/album.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    data: {
      title: 'Album'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutineModule { }
