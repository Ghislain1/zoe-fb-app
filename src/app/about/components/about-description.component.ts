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

        this.usingPanels();
        // this.usingPerson();

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