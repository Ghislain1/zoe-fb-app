import { Injectable } from "@angular/core";

import * as go from 'gojs';


@Injectable()
export class LinkTemplateService {


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