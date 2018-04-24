import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopologyListComponent } from './components/topology-list/topology-list.component';
import { TopologyDetailComponent } from './components/topology-detail/topology-detail.component';
import { CanDeactivateGuard } from '../core/guard/can-deactivate-guard.service';
import { TopologyDetailResolver } from './services/topology-detail-resolver.service';
import { TopologyHomeComponent } from './components/topology-home/topology-home.component';
import { TopologyWorkerComponent } from './components/topology-worker/topology-worker.component';
import { TopologyWorkerResolver } from './services/topology-worker-resolver.service';
import { ControllerDeviceResolver } from './services/controller-device-resolver.service';



const topoRoutes: Routes = [
  {
    path: 'app-topology-home',
    component: TopologyHomeComponent,
    children: [
      {
        path: '',
        component: TopologyListComponent,
        children: [
          {
            path: ':systemTag',
            component: TopologyWorkerComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: { controller: ControllerDeviceResolver }
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





