import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Topology } from '../../../core/models/topology';
import { TopologyItem } from '../../database/topology-item';
import { TopologyService } from '../../services/topology.service';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';


import * as go from 'gojs';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { TopologyAggregator } from '../../services/topology.aggregator';
import { CustomLink } from '../../utils/custom-link';
import { NodeTemplateService } from '../../utils/node-template.service';
import { TopologyEvent } from '../../database/topology-event';
import { LinkTemplateService } from '../../utils/link-template.service';





@Component({
    selector: 'app-topology-workspace',
    templateUrl: './topology-workspace.component.html',
    styleUrls: ['./topology-workspace.component.css']
})
export class TopologyWorkspaceComponent implements OnInit {


    private diagram: go.Diagram = new go.Diagram();
    private graphLinksModel: go.GraphLinksModel = new go.GraphLinksModel();
    private projectId: any;

    reponseToServer: any;

    @ViewChild('myDiagramDiv')
    private diagramRef: ElementRef;


    @Input()
    get model(): go.Model { return this.diagram.model; }
    set model(val: go.Model) { this.diagram.model = val; }

    @Output()
    nodeSelected = new EventEmitter<go.Node | null>();

    @Output()
    modelChanged = new EventEmitter<go.ChangedEvent>();


    subscription: Subscription;
    topologyItem: TopologyItem;
    topologyItem$: Observable<TopologyItem>;
    topologyItemId: number | string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private topologyService: TopologyService,
        private nodeTemplateService: NodeTemplateService,
        private linkTemplateService: LinkTemplateService,
        private topologyAggregator: TopologyAggregator) {


    }

    ngOnInit() {
        const $ = go.GraphObject.make;
        this.diagram = $(go.Diagram, this.diagramRef.nativeElement,
            {
                initialContentAlignment: go.Spot.Center  // center the content
            });


        this.topologyAggregator.getSource().subscribe(topoEvent => this.init(topoEvent), error => this.myError(error), () => this.myComplete());

    }

    myError(error): void {
        console.log("EROOORRRRRRRRRRRRR***************");
        console.log(error);
    }

    myComplete(): void {
        console.log("myComplete***************");

    }
    init(eventTopo: TopologyEvent): void {
        this.doJob(eventTopo.id);
    }


    private setUpGraphLinksModel(myModel: TopologyItem): void {

        //TODO: Presentation data 
        this.graphLinksModel.copiesArrays = true;
        this.graphLinksModel.copiesArrayObjects = true;


        //Presentation node array.
        this.graphLinksModel.nodeDataArray = myModel.nodeDataArray;

        //no link?
        if (myModel.linkDataArray) {
            this.graphLinksModel.linkDataArray = myModel.linkDataArray;
        }



        //of course set the model to diagram
        this.diagram.model = this.graphLinksModel;

        this.registryEvents();

        this.setUpTemplates();


    }

    private doJob(eventTopoId: number | string) {
        const $ = go.GraphObject.make;


        this.graphLinksModel.linkFromPortIdProperty = "fromPort" // required information:
        this.graphLinksModel.linkToPortIdProperty = "toPort";// required information:


        this.diagram.allowDrop = true; // necessary for dragging from Palette
        this.diagram.undoManager.isEnabled = true;

        //setting the model 
        this.topologyItem$ = this.topologyService.getTopologyById(eventTopoId);

        ///TODO:  create model according to view--> this presentation logic object:graphLinksModel
        this.setUpGraphLinksModel(this.topologyService.selectedTopologyItem)


        var diagram = this.diagram;
        diagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle",
                    { fill: "white" },
                    new go.Binding("fill", "color")),  // shape.fill = data.color
                $(go.TextBlock,
                    { margin: 5 },
                    new go.Binding("text", "key"))  // textblock.text = data.key
            );

        diagram.linkTemplate = this.linkTemplateService.getLinkTemplate_1();
        diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate();


        var nodeDataArray = this.topologyService.selectedTopologyItem.nodeDataArray;
        var linkDataArray = this.topologyService.selectedTopologyItem.linkDataArray;

        diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    }

    private test() {
        const $ = go.GraphObject.make;
        var diagram = this.diagram;
        diagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle",
                    { fill: "white" },
                    new go.Binding("fill", "color")),  // shape.fill = data.color
                $(go.TextBlock,
                    { margin: 5 },
                    new go.Binding("text", "key"))  // textblock.text = data.key
            );

        diagram.linkTemplate =
            $(go.Link,
                $(go.Shape,
                    new go.Binding("stroke", "color"),  // shape.stroke = data.color
                    new go.Binding("strokeWidth", "thick")),  // shape.strokeWidth = data.thick
                $(go.Shape,
                    { toArrow: "OpenTriangle", fill: null },
                    new go.Binding("stroke", "color"),  // shape.stroke = data.color
                    new go.Binding("strokeWidth", "thick"))  // shape.strokeWidth = data.thick
            );

        var nodeDataArray = [
            { key: "Alpha", color: "lightblue" },
            { key: "Beta", color: "pink" }
        ];
        var linkDataArray = [
            { from: "Alpha", to: "Beta", color: "blue", thick: 2 }
        ];
        diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    }


    // Add a port to the specified side of the selected nodes.
    addPort(side) {
        this.diagram.startTransaction("addPort");
        this.diagram.selection.each((node) => {
            // skip any selected Links
            if (!(node instanceof go.Node)) return;
            // compute the next available index number for the side
            var i = 0;
            while (node.findPort(side + i.toString()) !== node) i++;
            // now this new port name is unique within the whole Node because of the side prefix
            var name = side + i.toString();
            // get the Array of port data to be modified
            var arr = node.data[side + "Array"];
            if (arr) {
                // create a new port data object
                var newportdata = {
                    portId: name,
                    portColor: go.Brush.randomColor()
                    // if you add port data properties here, you should copy them in copyPortData above
                };
                // and add it to the Array of port data
                this.diagram.model.insertArrayItem(arr, -1, newportdata);
            }
        });
        this.diagram.commitTransaction("addPort");
    }

    private setUpTemplates(): void {

        console.log("********************  setUpTemplates () ");

        const $ = go.GraphObject.make;

        var portSize = new go.Size(15, 8);

        var treeExpanderButton = $(go.Panel, { height: 15 }, $("TreeExpanderButton"));

        //template for links
        var linkTemplate = $(CustomLink, // defined below
            {
                routing: go.Link.AvoidsNodes,
                corner: 4,
                curve: go.Link.JumpGap,
                reshapable: true,
                resegmentable: true,
                relinkableFrom: true,
                relinkableTo: true
            },
            new go.Binding("points").makeTwoWay(),
            $(go.Shape, { stroke: "#2F4F4F", strokeWidth: 2 })
        );

        this.diagram.nodeTemplate = this.nodeTemplateService.getNodeTemplate();
        this.diagram.linkTemplate = linkTemplate;

        console.log(this.diagram);


    }



    private registryEvents(): void {

        /// Event1:
        this.diagram.addDiagramListener("ChangedSelection",
            e => {
                const node = e.diagram.selection.first();

                this.nodeSelected.emit(node instanceof go.Node ? node : null);




            });

        //Evenst2:
        this.diagram.addModelChangedListener(e => e.isTransactionFinished && this.modelChanged.emit(e));

        // when the document is modified, add a "*" to the title and enable the "Save" button
        this.diagram.addDiagramListener("Modified", e => {
            var button = document.getElementById("SaveButton") as HTMLButtonElement;
            if (button) button.disabled = !this.diagram.isModified;

            /*   this.topo$.subscribe(i => {
                   var idx = i.name.indexOf("*");
                   if (this.diagram.isModified) {
                       if (idx < 0) i.name += "*";
                   }
                   else {
                       if (idx >= 0) {
                           i.name = i.name.substr(0, idx);
                       }
                   }
               }); */
        })
    }




    scan(): void {
        console.log(" ********* scanning...   ************************ ");

        this.diagram.model = this.graphLinksModel;   //this.hero$ = this.route.paramMap.switchMap((params: ParamMap) =>  this.topologyService.getHero(params.get('id')));
    }

    gotoTopologyList(topology: Topology): void {
        let topologyId = topology ? topology.id : null;
        this.router.navigate(['/app-topology', { id: topologyId, ghislain: 'this id not exist' }]);
    }


    unDo(): void {
        if (this.diagram.commandHandler.canUndo()) {
            this.diagram.commandHandler.undo();
        }
    }

    reDo(): void {
        if (this.diagram.commandHandler.canRedo()) {
            this.diagram.commandHandler.redo();
        }
    }





    removeDevice() {
        (e, obj) => {
            var device = obj.part.adornedObject;
            this.diagram.startTransaction("removeDevice");
            alert(device);
            this.diagram.commitTransaction("removeDevice");
        }
    }
    // Save the model to / load it from JSON text shown on the page itself, not in a database.
    save(): void {
        var model = this.diagram.model.toJson();
        this.diagram.isModified = false;
        this.reponseToServer = model;
    }

    load(): void {
        var mySavedModel = document.getElementById("mySavedModel") as HTMLDivElement;
        if (mySavedModel && go) {
            this.diagram.model = go.Model.fromJson(mySavedModel.textContent);
        }

    }


    // Change the color of the clicked port.
    changeColor(port): void {
        this.diagram.startTransaction("colorPort");
        var data = port.data;
        this.diagram.model.setDataProperty(data, "portColor", go.Brush.randomColor());
        this.diagram.commitTransaction("colorPort");
    }



}


