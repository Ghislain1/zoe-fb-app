import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TopoEditComponent } from './topo-edit/topo-edit.component';
import { TopoListComponent } from './topo-list/topo-list.component';
import { TopoService } from './topo.service';

const toposRoutes: Routes = [
  { path: 'app-topo-edit/:id', component: TopoEditComponent },
  { path: 'app-topo-list', component: TopoListComponent }
];



@NgModule({
  declarations: [TopoListComponent, TopoEditComponent],
  imports: [CommonModule, RouterModule.forChild(toposRoutes)],
  providers: [TopoService]
})
export class ToposModule { }
