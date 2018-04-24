import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes.component';
import { RouterModule, Routes } from '@angular/router';
import { DiagramComponent } from './diagram/diagram.component';

/**
 * @module
 * @description
 * List  Devices as Node.
 */
var nodeRoutes: Routes = [{ path: "app-nodes", component: NodesComponent },
{ path: 'app-node/:id', component: DiagramComponent },]

@NgModule({
  imports: [
    RouterModule.forChild(nodeRoutes),
    CommonModule,

  ],
  declarations: [NodesComponent, DiagramComponent]
})
export class NodesModule { }
