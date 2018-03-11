import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopologyListComponent } from './components/topology-list/topology-list.component';
import { TopologyWorkspaceComponent } from './components/topology-workspace/topology-workspace.component';
import { TopologyEditorRoutineModule } from './topology-editor-routine.module';
import { TopologyService } from './services/topology.service';
import { TopologyAggregator } from './services/topology.aggregator';
import { NodeTemplateService } from './utils/node-template.service';
import { LinkTemplateService } from './utils/link-template.service';

@NgModule({
  imports: [
    CommonModule,
    TopologyEditorRoutineModule
  ],
  declarations: [TopologyWorkspaceComponent, TopologyListComponent],
  providers: [TopologyService, TopologyAggregator, NodeTemplateService, LinkTemplateService]

})
export class TopologyEditorModule { }
