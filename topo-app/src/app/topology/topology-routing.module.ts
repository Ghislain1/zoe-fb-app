import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




const topoRoutes: Routes = [
  {
    path: 'app-topology-home',
    component: TopologyCenterComponent,
    children: [
      {
        path: '',
        component: TopologyListComponent,
        children: [
          {
            path: ':systemTag',
            component: TopologyWorkerComponent,
           // canDeactivate: [CanDeactivateGuard],
           // resolve: { controller: ControllerDeviceResolver }
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(topoRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TopologyDetailResolver, TopologyWorkerResolver, ControllerDeviceResolver
  ]
})
export class TopologyRoutineModule { }