import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Topology, NodeDataArray } from '../../../core/models/topology';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MessageService } from '../../../core/services/message.service';


import * as go from 'gojs'
import { LinkTemplateService } from '../../../core/utils/link-template.service';
import { NodeTemplateService, SHAPE_TYPE } from '../../../core/utils/node-template.service';
import { DiagramService } from '../../../core/utils/diagram.service';
import { JsonPipe } from '@angular/common';
import { TopologyService } from '../../../core/services/topology.service';
import { Controller } from '../../../core/models/bs/controller';
import { DeviceService } from '../../../core/services/device.service';
import { LinkService } from '../../../core/services/link.service';
import { link } from 'fs';

@Component({
  selector: 'app-topology-worker',
  templateUrl: './topology-worker.component.html',
  styleUrls: ['./topology-worker.component.css']
})
export class TopologyWorkerComponent implements OnInit {

  ////This represents a topology because he is master and he gets children
  topology: Topology;
  topology$: Observable<Topology>;
  editName: string;
  selectedId: string | number;
  topologyJson: string;

  @ViewChild('myDiagramDiv')
  diagramDiv: ElementRef;




  diagram: go.Diagram;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public messageService: MessageService,
    private topologyService: TopologyService,
    private linkTemplateService: LinkTemplateService,
    private nodeTemplateService: NodeTemplateService,
    private diagramService: DiagramService
  ) {

    const $ = go.GraphObject.make;
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.allowDrop = true;  // necessary for dragging from Palette
    this.diagram.undoManager.isEnabled = true;

    this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_A();

    this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();

    this.topology$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = params.get('systemTag');
      return this.topologyService.getTopologyBySystemTag(params.get('systemTag'))
    });


    //set up model
    this.topology$.subscribe(topo => {
      this.topology = topo;
      this.topologyJson = JSON.stringify(this.topology, null, 4);
      this.initData();
    })

  }


  ngOnInit() {
    this.diagram.div = this.diagramDiv.nativeElement;

    //dojob for template Node
    // this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_A();

    //dojob for template Links
    //this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();




  }

  private initData() {

    console.log(this.topologyJson);
    let nodeDataArray = this.topology.nodes;
    let linkDataArray = this.topology.links;
    console.log(JSON.stringify(this.topology.links, null, 4));



    this.diagram.model.nodeDataArray = nodeDataArray;




  }

  showT() {
    return "XXXXXXXXXXXXXXXX";
  }

  cancel() {

  }

  changeToTree() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    this.diagram.layout = $(go.TreeLayout);
  }

  changeToTree_90() {
    this.diagram.startTransaction("changeToTree_90 Layout");
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    let rLayout = $(go.TreeLayout, { angle: 90 });
    this.diagram.layout = rLayout;

    this.diagram.initialAutoScale = go.Diagram.UniformToFill;
    this.diagram.commitTransaction("changeToTree_90 Layout");
  }
  changeToRing() {
    this.diagram.startTransaction("changeToRing Layout");
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    let rLayout = $(go.CircularLayout);
    this.diagram.layout = rLayout;
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.initialAutoScale = go.Diagram.UniformToFill;
    this.diagram.commitTransaction("changeToRing Layout");
  }

  changeToGrid() {
    this.diagram.startTransaction("changeToGrid Layout");
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    let gLayout = $(go.GridLayout);
    gLayout.wrappingColumn = 4;
    this.diagram.layout = gLayout;
    this.diagram.commitTransaction("changeToGrid Layout");
  }


  save() {
  }

  ///handle any gut action for any obeect
  cut() {

    console.log("cut........");

    this.diagram.commandHandler.cutSelection();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.topology || this.topology.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    this.messageService.add('Discard changes?');
    return Observable.of(true);
  }

  gotoTologies() {
    let crisisId = this.topology ? this.topology.id : null;

    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}