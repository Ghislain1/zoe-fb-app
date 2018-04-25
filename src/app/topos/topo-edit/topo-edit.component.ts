import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TopoService } from '../topo.service';

import * as go from 'gojs'

import { Node } from '../../core/models/bs/node'
import { MessageService } from '../../core/services/message.service';
import { NodeTemplateService } from '../../core/utils/node-template.service';
import { LinkTemplateService } from '../../core/utils/link-template.service';
import { LoggingService } from '../../core/services/logging.service';










@Component({
  selector: 'app-topo-edit',
  templateUrl: './topo-edit.component.html',
  styleUrls: ['./topo-edit.component.css']
})
export class TopoEditComponent implements OnInit {

  ///TODO: ???
  @Input()
  node: Node;

  //TODO: ???
  @ViewChild('myDiagramDiv')
  diagramDiv: ElementRef;

  private diagram: any;


  constructor(
    private route: ActivatedRoute,
    private topoService: TopoService,
    private location: Location,
    private messageService: MessageService,
    private linkTemplateService: LinkTemplateService,
    private nodeTemplateService: NodeTemplateService,
    private loggingService: LoggingService,


  ) {

    const $ = go.GraphObject.make;
    /* this.diagram = new go.Diagram();
     this.diagram.initialContentAlignment = go.Spot.Center;
     this.diagram.allowDrop = true;  // necessary for dragging from Palette
     this.diagram.undoManager.isEnabled = true;
     let grid = $(go.GridLayout);
 
     // grid.spacing = new go.Size(20, 80);
    // grid.spacing = new go.Size(60, 80);
     this.diagram.layout = grid;
 
     //Model
     this.diagram.Model = new go.GraphLinksModel(); */
  }

  ngOnInit(): void {
    this.getNode();

  }

  getNode(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.log(id);
    this.topoService.getNode(id).subscribe(nodeMaster => this.initializeDiagram(nodeMaster));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.topoService.updateNode(this.node)
      .subscribe(() => this.goBack());
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TopoEditComponent: ' + message);
  }

  private stringify(obj: any) {
    var result = JSON.stringify(obj, null, 4);
    this.messageService.add('TopoEditComponent: ' + result);
  }

  /** setup an instance of the GoJS diagramm, and builds a tree of the  */
  private initializeDiagram(masterNode: Node) {
    this.log("Diagram Initialize");
    const $ = go.GraphObject.make;
    this.node = masterNode;

    // The first Diagram showcases what the Nodes might look like "in action"
    this.diagram = $(go.Diagram, "myDiagramDiv",
      {
        initialContentAlignment: go.Spot.TopLeft,
        "undoManager.isEnabled": true,
        layout: $(go.GridLayout)
      });

    //this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();
    this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_1();

    //Model
    this.diagram.model.linkFromPortIdProperty = "fromPort"; // identifies data property names
    this.diagram.model.linkToPortIdProperty = "toPort";   // required information:
    this.diagram.model.nodeKeyProperty = "nodeId";
    this.node.children.push(this.node);
    this.node.children.reverse();
    this.diagram.model.nodeDataArray = this.node.children;
    this.diagramDiv.nativeElement = this.diagram;
    this.log("Diagram Initialize Finished !!! ");




  }


}

