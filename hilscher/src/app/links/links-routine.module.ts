import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LinksRootComponent } from './components/links-root/links-root.component';



const linksRoutes: Routes = [
  { path: 'app-links-root', component: LinksRootComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(linksRoutes)
  ],
  exports: [RouterModule]

})
export class LinksRoutineModule { }
