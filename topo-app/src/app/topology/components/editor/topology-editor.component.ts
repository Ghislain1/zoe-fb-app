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

    @Input()
    topo: Topology;

    @ViewChild('myDiagramDiv')
    diagramDiv: ElementRef;

    diagram: go.Diagram;

    public topo$: Observable<Topology>;
    private configuration: Config;

    constructor(
        private route: ActivatedRoute,
        private topologyService: TopologyService,
        private messageService: MessageService,
        private location: Location,
        private configService: ConfigService,

        private linkTemplateService: LinkTemplateService,
        private deviceTemplateService: DeviceTemplateService,
        private diagramService: DiagramService,
    ) {



    }

    ngOnInit(): void {

        this.diagram = new go.Diagram();
        this.diagram.div = this.diagramDiv.nativeElement;
        this.getTopology();
        this.protocol("OnInit() finished");

    }

    getTopology(): void {

        const id = this.route.snapshot.paramMap.get('systemTag');
        this.protocol(" id = " + id);
        this.protocol(" calls   getTopology()");
        const urlserver = this.configService.serverConfig.urlApiTopo;
        this.protocol(" calls   getTopology() " + urlserver);
        this.topo$ = this.topologyService.getTopology(id, urlserver);
        this.topo$.subscribe(topo => {
            this.topo = topo;
            this.setupDiagram();
        }
        );
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {

        this.topologyService.updateTopology(this.topo).subscribe(() => this.goBack());
    }

    private setupDiagram(): void {
        const $ = go.GraphObject.make;


        this.diagram.initialContentAlignment = go.Spot.Center;
        this.diagram.allowDrop = true;  // necessary for dragging from Palette
        this.diagram.undoManager.isEnabled = true;
        let grid = $(go.GridLayout);

        // grid.spacing = new go.Size(20, 80);
        grid.spacing = new go.Size(60, 80);
        this.diagram.layout = grid;

        let nodeDataArray = this.topo.nodes
        let linkDataArray = this.topo.links;

        // this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();
        this.diagram.nodeTemplate = this.deviceTemplateService.getNodeTemplate_1();

        let graphLinksModel = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        this.diagram.model = graphLinksModel;

        graphLinksModel.linkFromPortIdProperty = "fromPort"; // identifies data property names
        graphLinksModel.linkToPortIdProperty = "toPort";   // required information:


        this.protocol("setup diagram is finished!!");

    }


    /** Log a HeroService message with the MessageService */
    private protocol(message: string) {
        this.messageService.add('TopologyEditorComponent: ' + message);
    }
}
