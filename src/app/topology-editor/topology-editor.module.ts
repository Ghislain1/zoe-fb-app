import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { TopologyWorkspaceComponent } from './components/topology-workspace/topology-workspace.component';
import { TopologyEditorRoutineModule } from './topology-editor-routine.module';
import { TopologyService } from './services/topology.service';
import { NodeTemplateService } from '../core/utils/node-template.service';
import { LinkTemplateService } from '../core/utils/link-template.service';
  

@NgModule({
  imports: [
    CommonModule,
    TopologyEditorRoutineModule
  ],
  declarations: [TopologyWorkspaceComponent],
  providers: [TopologyService,  NodeTemplateService, LinkTemplateService]

})
export class TopologyEditorModule { }
