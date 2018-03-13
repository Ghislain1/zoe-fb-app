import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopologyService } from './services/topology.service';
 
import { TopologyListComponent } from './components/topology-list/topology-list.component';
import { TopologyDetailComponent } from './components/topology-detail/topology-detail.component';
import { TopologyHomeComponent } from './components/topology-home/topology-home.component';
import { FormsModule } from '@angular/forms';
import { TopologyRoutineModule } from './topology-routine.module';
import { CanDeactivateGuard } from '../core/guard/can-deactivate-guard.service';
import { TopologyWorkerComponent } from './components/topology-worker/topology-worker.component';
import { LinkTemplateService } from '../core/utils/link-template.service';
import { NodeTemplateService } from '../core/utils/node-template.service';
import { DiagramService } from '../core/utils/diagram.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopologyRoutineModule
  ],
  declarations: [
    TopologyHomeComponent,
    TopologyListComponent,  
    TopologyWorkerComponent ,
    TopologyDetailComponent
  ],
  providers: [
    TopologyService,CanDeactivateGuard, NodeTemplateService, DiagramService,LinkTemplateService
  ]
})

export class TopologyModule { }
