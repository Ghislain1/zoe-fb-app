import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopologyCenterComponent } from './components/center/topology-center.component';
import { Routes, RouterModule } from '@angular/router';
import { TopologyListComponent } from './components/list/topology-list.component';
import { TopologyEditorComponent } from './components/editor/topology-editor.component';
import { TopologyListResolver } from './resolvers/topology-list-resolver.service';
import { TopologyEditorResolver } from './resolvers/topology-editor-resolver.service';

const topoRoutes: Routes = [

  {
    path: 'app-topology-center',
    component: TopologyCenterComponent,

    children: [
      {
        path: '',
        component: TopologyListComponent,
        resolve: { topology: TopologyListResolver },
        children: [
          {
            path: ':systemTag',
            component: TopologyEditorComponent,
            resolve: { topology: TopologyEditorResolver }
          }

        ]
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(topoRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //TopologyWorkerResolver
  ]
})
export class TopologyRoutineModule { }