import { Injectable } from "@angular/core";

import * as go from 'gojs';
import { CustomLink } from "../extensions/custom-link";


const $ = go.GraphObject.make;
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
      $(go.Shape, new go.Binding("stroke", "linkColor"), { strokeWidth: 2 })
    );
    return linkTemplate;
  }

  /** Avoid Node with JumpOver ***///
  public getLinkTemplate_2(): any {
    const linkTemplate =
      $(CustomLink,  // defined below
        {
          routing: go.Link.AvoidsNodes,
          corner: 24,
          curve: go.Link.JumpOver,
          reshapable: true,
          resegmentable: true,
          relinkableFrom: true,
          relinkableTo: true
        },                  // rounded corners
        new go.Binding("points").makeTwoWay(),
        $(go.Shape, new go.Binding("stroke", "linkColor"), { strokeWidth: 2 })
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