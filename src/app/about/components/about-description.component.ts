import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as go from 'gojs'
import { DummyShapeProvider } from '../services/dummy.shape.provider';
import { DummyNodeTemplateProvider } from '../services/dummy-node-template.provider';
import { NodeDataService } from '../services/node-data.service';
import { LinkDataService } from '../services/link-data.service';
 
import { Observable } from 'rxjs/Observable';
 
import { element } from 'protractor';

@Component({
    templateUrl: './about-description.component.html',
    styleUrls: ['./about-description.component.css']
})
export class AboutDescriptionComponent implements OnInit { 

    @ViewChild('myDiagramDiv')
    diagramDiv: ElementRef;

    diagram: go.Diagram;

    constructor(private dummyNodeTemplateProvider: DummyNodeTemplateProvider,
        private linkDataService: LinkDataService,
        private nodeDataService: NodeDataService,
        private dummyShapeProvider: DummyShapeProvider,
       ) { }

    ngOnInit() {

        this.usingPanels_1();
        // this.usingPerson();

    }

   private usingPanels_1()  : void  {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    this.diagram = $(go.Diagram, this.diagramDiv.nativeElement,
        {
            initialContentAlignment: go.Spot.Center  // center the content
        });
        var portSize = new go.Size(12, 8);
        this.diagram.nodeTemplate=
            $(go.Node, "Vertical",
            $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle",{fill:null,desiredSize:new go.Size(300,140)}),
          
            $(go.Panel, "Table",{background:"green"},
            $(go.TextBlock, {row:0} ,new go.Binding("text","deviceName")),
            $(go.Picture, { width: 300, height: 100 }, {errorFunction:(s,ss)=>{ alert(s.source);return null}}, {row:1}, new go.Binding("source","src")),
            $(go.TextBlock,{row:2}, new go.Binding("text","tool")))),
            $(go.Panel, "Horizontal",
            new go.Binding("itemArray", "ports"),
            { 
              itemTemplate:
                $(go.Panel,
                  { _side: "bottom",
                    fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                     },
                  new go.Binding("portId", "portId"),
                  $(go.Shape, "Rectangle",
                    { stroke: null, strokeWidth: 0,
                      desiredSize: portSize,
                      margin: new go.Margin(0, 1) },
                    new go.Binding("fill", "portColor"))
                )  // end itemTemplate
            }
          )) ;         
    

          var nodeDatas=[{deviceName:"Device Nr.1" ,
           src:"/assets/images/cfix.PNG" ,
           pic:"Picture Place",
           ports:[{portId:"port0",portColor:"#c25c"}, {portId:"port1",portColor:"#7fff"}],
           tool:"Tool Nr1"},
           
             {ports:[{portId:"port0",portColor:"#F1230"}],
             tool:"Tool Nr1",deviceName:"Device Nr.2"}]
          this.diagram.model= new go.GraphLinksModel(nodeDatas);
        
   }
 




    private usingPanels(): void {
        var $ = go.GraphObject.make;  // for conciseness in defining templates

        this.diagram = $(go.Diagram, this.diagramDiv.nativeElement,
            {
                initialContentAlignment: go.Spot.Center  // center the content
            });


        var violetbrush = $(go.Brush, "Linear", { 0.0: "Violet", 1.0: "Lavender" });
        var node2 = $(go.Node, "Auto",
            $(go.Shape, "Ellipse", { fill: violetbrush }),
            $(go.TextBlock, "Goodbye!", { margin: 5 })
        );
        var ghislain = $(go.Part, "Vertical",
            $(go.Shape,
                { figure: "RoundedRectangle", fill: 'green' }),
            $(go.TextBlock,
                { text: "Ghislain" }));


        var spahe = this.dummyShapeProvider.getAllShapeByFigure();
        var myNodeing = this.dummyShapeProvider.getByUsingPanel();

        this.diagram.add(myNodeing);

        this.diagram.add(ghislain);

    }

}