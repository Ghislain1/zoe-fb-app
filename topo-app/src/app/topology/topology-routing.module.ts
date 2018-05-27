import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopologyCenterComponent } from './components/center/topology-center.component';
import { Routes, RouterModule } from '@angular/router';
import { TopologyListComponent } from './components/list/topology-list.component';
import { TopologyEditorComponent } from './components/editor/topology-editor.component';

import { TopologyEditorResolver } from './resolvers/topology-editor-resolver.service';
import { ConfigResolver } from '../shared/resolvers/config-resolver.service';

const topoRoutes: Routes = [
    {
        path: 'app-topology-center',
        component: TopologyCenterComponent,
        resolve: { config: ConfigResolver },
        children: [
            {
                path: '',
                component: TopologyListComponent,
                resolve: { config: ConfigResolver }
            }
        ]
    },
    {
        path: 'topo/:systemTag',
        component: TopologyEditorComponent,
        //TODO: Try to understand resolve
        // resolve: { topology: ConfigResolver }
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
        //TopologyWorkerResolver
    ]
})
export class TopologyRoutineModule { }
