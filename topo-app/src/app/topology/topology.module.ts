import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopologyRoutineModule } from './topology-routing.module';
import { Topology } from './models/topology';


import { TopologyListComponent } from './components/list/topology-list.component';
import { TopologyEditorComponent } from './components/editor/topology-editor.component';
import { TopologyCenterComponent } from './components/center/topology-center.component';
import { DeviceService } from './services/device.service';
import { LinkService } from './services/link.service';
import { HttpErrorHandler } from '../shared/handlers/http-error-handler';
import { ConfigService } from '../shared/services/config-service';
import { LoggingService } from '../shared/services/logging.service';
import { MessageService } from '../shared/services/message.service';
import { LinkTemplateService } from './services/link-template.service';
import { DeviceTemplateService } from './services/device-template.service';
import { DiagramService } from './services/diagram.service';
import { TopologyService } from './services/topology.service';
import { TopologyEditorResolver } from './resolvers/topology-editor-resolver.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // RouterModule, // for outlet-route
        TopologyRoutineModule
    ],
    declarations: [TopologyListComponent, TopologyEditorComponent, TopologyCenterComponent],
    providers: [TopologyEditorResolver,
        LinkTemplateService, DeviceService, LinkService, DeviceTemplateService, DiagramService, TopologyService,
        LoggingService, MessageService, ConfigService, HttpErrorHandler]
})
export class TopologyModule { }
