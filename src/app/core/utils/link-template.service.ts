import { Injectable } from "@angular/core";

import * as go from 'gojs';
import { CustomLink } from "./custom-link";


@Injectable()
export class LinkTemplateService {


    /** an orthogonal link template, reshapable and relinkable **/
    public getLinkTemplate(): any {
        const $ = go.GraphObject.make;
        let linkTemplate = $(CustomLink,  // defined below
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
        return linkTemplate;
    }

    getLinkTemplate_1() {
        const $ = go.GraphObject.make;
        var linkTemplate =
            $(go.Link,
                $(go.Shape,
                    new go.Binding("stroke", "color"),  // shape.stroke = data.color
                    new go.Binding("strokeWidth", "thick")),  // shape.strokeWidth = data.thick
                $(go.Shape,
                    { toArrow: "OpenTriangle", fill: null },
                    new go.Binding("stroke", "color"),  // shape.stroke = data.color
                    new go.Binding("strokeWidth", "thick"))  // shape.strokeWidth = data.thick
            );
        return linkTemplate;


    }
}