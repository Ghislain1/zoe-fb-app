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

@Component({
  selector: 'app-topology-worker',
  templateUrl: './topology-worker.component.html',
  styleUrls: ['./topology-worker.component.css']
})
export class TopologyWorkerComponent implements OnInit {
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

  }


  ngOnInit() {
    this.topology$ = this.route.paramMap.switchMap((params: ParamMap) =>
      this.topologyService.getTopology(params.get('id')));

    //dojob Diagram template
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    this.diagram = $(go.Diagram, this.diagramDiv.nativeElement);
    this.diagram.initialContentAlignment = go.Spot.Center;  // center the content
    this.diagram.undoManager.isEnabled = true;
    this.diagram.padding = new go.Margin(5, 5, 25, 5);
    this.diagram.layout = $(go.GridLayout);

    //dojob for template Node
    this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_1();

    //dojob for template Links
    this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();


    //set up model
    this.topology$.subscribe(topo => {
      this.topology = topo;
      this.topologyJson = JSON.stringify(this.topology);
      this.initData();
    })

    //Route gives the selected id;
    //  this.route.data.subscribe((data: { topology: Topology }) => {
    //    this.editName = "data.topology.name";
    //    this.topology = data.topology;
    //     this.topologyJson = JSON.stringify(this.topology);
    //    this.usingPanels();
    // });
  }

  private initData() {

    //alert(this.topologyJson);
    console.log(this.topologyJson);
    let linkDataArray = this.topology.linkDataArray;
    let nodeDataArray = this.topology.nodeDataArray;
    let graphLinksModel = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    graphLinksModel.linkFromPortIdProperty = "fromPort";
    graphLinksModel.linkToPortIdProperty = "toPort";
    this.diagram.model = graphLinksModel;
  }

  showT() {
    return "XXXXXXXXXXXXXXXX";
  }

  cancel() {

  }

  changeToTree(){
     var $ = go.GraphObject.make;  // for conciseness in defining templates
     this.diagram.layout = $(go.TreeLayout);
  }
  changeToRing(){
    this.diagram.startTransaction("changeToRing Layout");
      var $ = go.GraphObject.make;  // for conciseness in defining templates
     let rLayout= $(go.CircularLayout);
       this.diagram.layout = rLayout;
      this.diagram. initialContentAlignment= go.Spot.Center;
      this.diagram. initialAutoScale= go.Diagram.UniformToFill;
         this.diagram.commitTransaction("changeToRing Layout");
   }

  changeToGrid(){
  this.diagram.startTransaction("changeToGrid Layout");
    var $ = go.GraphObject.make;  // for conciseness in defining templates
   let gLayout= $(go.GridLayout);
    gLayout   .wrappingColumn = 4;
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