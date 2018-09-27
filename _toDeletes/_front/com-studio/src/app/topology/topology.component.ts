import { TopologyNode } from './../shared/models/topology-node';

import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopologyNodeService } from '../shared/services/topology-node.service';
import { switchMap } from 'rxjs/Operators';
import { NodeTemplateService } from '../shared/services/node-template.service';

import * as go from 'gojs'


@Component({
    selector: 'app-topology',
    templateUrl: './topology.component.html',
    styleUrls: ['./topology.component.css']
})
export class TopologyComponent implements OnInit {
    @Input() topologyNode: TopologyNode;

    @ViewChild('myDiagramDiv') //TODO: Ghislain why this?
    diagramDiv: ElementRef;

    diagram: go.Diagram;

    topologyNodeChildren: TopologyNode[] = [];

    constructor(
        private route: ActivatedRoute,
        private topologyNodeService: TopologyNodeService,
        private nodeTemplateService: NodeTemplateService
        //  private location: Location : TODO GHislain when can you se this service? e.g
    ) {



    }


    async  ngOnInit() {
        await this.getTopologyNode();



        //  this.diagram.div = this.diagramDiv.nativeElement;
    }

    getTopologyNode() {
        const systemTag = this.route.snapshot.paramMap.get('systemTag');

        this.topologyNodeService.get(systemTag).subscribe(topologyNode => {
            this.topologyNode = topologyNode
            this.GetChildren();
        });

    }

    GetChildren(): void {
        this.populateChildren();

    }

    private populateChildren() {
        this.topologyNodeService.GetChildren(this.topologyNode.systemTag).pipe(switchMap(nodes => {
            this.topologyNodeChildren = nodes;
            this.topologyNodeChildren.push(this.topologyNode);// add Msater to liost too
            this.setUpDiagramSimple();
            return this.route.queryParamMap;
        })).subscribe();


    }

    private setUpDiagramSimple() {
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        this.diagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
            {
                initialContentAlignment: go.Spot.Center,  // center the content
                "undoManager.isEnabled": true  // enable undo & redo
            });

        // define a simple Node template
        this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplateSimple();



        // define a simple Node template
        // this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplateSimple();
        this.diagram.model = new go.GraphLinksModel(this.topologyNodeChildren);

    }



    private setupDiagram(): void {

        const $ = go.GraphObject.make;
        this.diagram = new go.Diagram();
        this.diagram.initialContentAlignment = go.Spot.Center;
        this.diagram.allowDrop = true;  // necessary for dragging from Palette
        this.diagram.undoManager.isEnabled = true;
        let grid = $(go.GridLayout);

        // grid.spacing = new go.Size(20, 80);
        grid.spacing = new go.Size(60, 80);
        this.diagram.layout = grid;


        let nodeDataArray = this.topologyNodeChildren;
        // let linkDataArray = this.topology.links;

        // this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        // this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();
        this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplateSimple();


        let graphLinksModel = new go.GraphLinksModel(nodeDataArray);
        this.diagram.model = graphLinksModel;
        this.logIt(nodeDataArray);
        this.logIt(graphLinksModel);

        // graphLinksModel.linkFromPortIdProperty = "fromPort"; // identifies data property names
        // graphLinksModel.linkToPortIdProperty = "toPort";   // required information:



        // this.loggingService.stringify(this.diagram.model);
    }

    private logIt(anyOb) {
        console.log(anyOb, null, 4);
    }
}