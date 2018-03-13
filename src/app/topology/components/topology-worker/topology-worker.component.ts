import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Topology, NodeDataArray } from '../../../core/models/topology';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../core/services/message.service';


import * as go from 'gojs'
import { LinkTemplateService } from '../../../core/utils/link-template.service';
import { NodeTemplateService, SHAPE_TYPE } from '../../../core/utils/node-template.service';
import { DiagramService } from '../../../core/utils/diagram.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-topology-worker',
  templateUrl: './topology-worker.component.html',
  styleUrls: ['./topology-worker.component.css']
})
export class TopologyWorkerComponent implements OnInit {
  topology: Topology;
  editName: string;

  topologyJson: string;

  @ViewChild('myDiagramDiv')
  diagramDiv: ElementRef;

  diagram: go.Diagram;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    public messageService: MessageService,
    private linkTemplateService : LinkTemplateService,
      private nodeTemplateService: NodeTemplateService,
      private diagramService  : DiagramService
     ) {

      }


  ngOnInit() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    this.diagram = $(go.Diagram, this.diagramDiv.nativeElement,
      {
        //   linkFromPortIdProperty: "fromPort",  // required information:
       //    linkToPortIdProperty: "toPort",      // identifies data property names
          initialContentAlignment: go.Spot.Center,  // center the content
          layout: $(go.GridLayout), // use a GridLayout
          padding: new go.Margin(5,5,25,5) // to see the names of shapes on the bottom row
      });

      console.log("addDiagramListener");
        // notice whenever the selection may have changed
 this.diagram.addDiagramListener("ChangedSelection",  (e)=> {
  

   
 
  });
  
    this.route.data
      .subscribe((data: { topology: Topology }) => {
        this.editName = "data.topology.name";
        this.topology = data.topology;
        this.topologyJson=JSON.stringify(this.topology);
         this.usingPanels();
       });
  }  
  private usingPanels(): void {
    var $ = go.GraphObject.make; // static method

    let node1={ key:1, location:"500, 200", color:"red", text:"Ghislain", img:"../assets/images/appIcon.ico" };
    let node2={ key:2, location:"500, 200", color:"grren", text:"Zoe",  img:"../assets/images/cfix.PNG" };
    let node3={ key:3, location:"500, 200", color:"black", text:"Virginie" , img:"../assets/images/appIcon.ico" };

    let link1={from:1, to:2, color:"red"};

    //template link
    this.diagram.linkTemplate=$(go.Link,
       $(go.Shape, new go.Binding("stroke", "color")));

 //console.log( this.topologyJson);
//Mode teemplate 
      
 
this.diagram.nodeTemplate =this.nodeTemplateService.getNodeTemplate_G("name","ports");

 
  let  nodeDataArray=this.diagramService.createArrayData(10,2);
  nodeDataArray.forEach(element => { element.img="../assets/images/cfix.PNG"
    
  });
  console.log( nodeDataArray);
 let  linkDataArray= [];
   this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

 

}
showT(){
  return "XXXXXXXXXXXXXXXX";
}
  cancel() {
    this.gotoCrises();
  }

  save() {
   
  }

  ///handle any gut action for any obeect
  cut(){

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

  gotoCrises() {
    let crisisId = this.topology ? this.topology.id : null;
  
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}