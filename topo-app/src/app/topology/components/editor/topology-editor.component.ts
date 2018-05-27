import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';





import * as go from 'gojs';
import { Topology } from '../../models/topology';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MessageService } from '../../../shared/services/message.service';
import { TopologyService } from '../../services/topology.service';
import { DeviceTemplateService } from '../../services/device-template.service';
import { LoggingService } from '../../../shared/services/logging.service';
import { LinkTemplateService } from '../../services/link-template.service';
import { DiagramService } from '../../services/diagram.service';
import { SerpentineLayout } from '../../extensions/serpentine-layout';
import { Config } from '../../../shared/Config';
import { ConfigService } from '../../../shared/services/config-service';


@Component({
    selector: 'app-topology-editor',
    templateUrl: './topology-editor.component.html',
    styleUrls: ['./topology-editor.component.css']
})
export class TopologyEditorComponent implements OnInit {

    @Input() topo: Topology;

    public topo$: Observable<Topology>;
    private configuration: Config;

    constructor(
        private route: ActivatedRoute,
        private topologyService: TopologyService,
        private messageService: MessageService,
        private location: Location,
        private configService: ConfigService
    ) {

        this.route.data.subscribe((data: { config: Config }) => {
            this.configuration = { ...data.config };
        });

    }

    ngOnInit(): void {
        this.getTopology();
        this.protocol("OnInit() finished");
    }

    getTopology(): void {

        const id = this.route.snapshot.paramMap.get('systemTag');
        this.protocol(" id = " + id);
        this.protocol(" calls getTopologyBySystemTag()");
        const urlserver = this.configService.serverConfig.urlApiTopo;

        this.topo$ = this.topologyService.getTopology(id, urlserver);
        this.topo$.subscribe(topo => this.topo = topo);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {

        this.topologyService.updateTopology(this.topo)
            .subscribe(() => this.goBack());
    }

    /** Log a HeroService message with the MessageService */
    private protocol(message: string) {
        this.messageService.add('TopologyEditorComponent: ' + message);
    }
}
