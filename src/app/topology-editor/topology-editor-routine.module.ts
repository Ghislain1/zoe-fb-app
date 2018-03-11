

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { TopologyWorkspaceComponent } from './components/topology-workspace/topology-workspace.component';


const topologyEditorRoutes: Routes = [
  {
    path: 'topologyList', component:TopologyWorkspaceComponent , children: [
      
    ]
  }, //Add a the route to redirect to home-desc

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(topologyEditorRoutes) // Registry your  settings route -- Not forRoot!!!
  ],
  exports: [RouterModule]

})
export class TopologyEditorRoutineModule { }

