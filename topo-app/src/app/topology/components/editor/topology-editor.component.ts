import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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



@Component({
  selector: 'app-topology-editor',
  templateUrl: './topology-editor.component.html',
  styleUrls: ['./topology-editor.component.css']
})
export class TopologyEditorComponent implements OnInit {

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
    private nodeTemplateService: DeviceTemplateService,
    private diagramService: DiagramService,
    private loggingService: LoggingService
  ) {

    const $ = go.GraphObject.make;
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.allowDrop = true;  // necessary for dragging from Palette
    this.diagram.undoManager.isEnabled = true;
    let grid = $(go.GridLayout);

    // grid.spacing = new go.Size(20, 80);
    grid.spacing = new go.Size(60, 80);
    this.diagram.layout = grid;
    //We have the digram  you can  do what we want:
    this.registryEvents();

    this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_1();
    this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();
    this.topology$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = params.get('systemTag'); return this.topologyService.getTopologyBySystemTag(params.get('systemTag'))
    });


    //set up model
    this.topology$.subscribe(topo => {
      this.topology = topo;
      this.loggingService.stringify(topo);

      this.setupDiagram();
    })

  }


  ngOnInit() {
    this.diagram.div = this.diagramDiv.nativeElement;
  }

  private setupDiagram(): void {
    const $ = go.GraphObject.make;

    let nodeDataArray = this.topology.nodes;
    let linkDataArray = this.topology.links;

    // this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate();
    this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate_1();


    let graphLinksModel = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    this.diagram.model = graphLinksModel;

    graphLinksModel.linkFromPortIdProperty = "fromPort"; // identifies data property names
    graphLinksModel.linkToPortIdProperty = "toPort";   // required information:


    this.loggingService.stringify(this.diagram.model);
  }

  showT() {

  }

  cancel() {
  }

  // Save the model to / load it from JSON text shown on the page itself, not in a database.
  save() {

    let curretnModel = this.diagram.model.toJson("GHislain");

    this.loggingService.stringify(JSON.parse(curretnModel).linkDataArray);
    //this.topologyService.save(curretnModel);
  }

  changeToLinie(): void {
    this.diagram.startTransaction("changeToLinie Layout");
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    this.diagram.initialContentAlignment = go.Spot.Center,
      this.diagram.isTreePathToChildren = false,  // links go from child to parent
      this.diagram.layout = $(SerpentineLayout)   // defined in SerpentineLayout.js
    this.diagram.commitTransaction("changeToLinie Layout");


  }

  avoidAll(): void {
    this.diagram.startTransaction("avoidAll Layout");

    this.diagram.linkTemplate = this.linkTemplateService.getLinkTemplate_2();
    this.diagram.commitTransaction("avoidAll Layout");
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
    gLayout.wrappingColumn = 7;

    this.diagram.layout = gLayout;
    this.diagram.commitTransaction("changeToGrid Layout");
  }

  private registryEvents(): void {
    //TODO : read https://gojs.net/latest/api/symbols/Model.html
    this.diagram.addModelChangedListener((e) => {
      if (e.isTransactionFinished) {
        var json = e.model.toJson();
      }
    });
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
    let crisisId = this.topology ? this.topology.systemTag : null;

    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}