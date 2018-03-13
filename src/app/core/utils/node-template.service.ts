import { Injectable } from "@angular/core";

import * as go from 'gojs';

 
//Type of shape ...
 export const SHAPE_TYPE: string [] =["RoundedRectangle",
"Ellipse",
"Hexagon",
"Cloud",
"Procedure",
];


@Injectable()
export class NodeTemplateService {

    getNodeTemplate_2( panelType:string, shapeType:string , propertyName:string){
        const $ = go.GraphObject.make;
        let temp=$(go.Node, panelType,
                  $(go.Shape, shapeType),
                $(go.TextBlock, { margin: 5 },  new go.Binding("text", propertyName)) ,
               { toolTip:  // define a tooltip for each node that displays the color as text
                $(go.Adornment, "Auto",
                  $(go.Shape, { fill: "#FFFFCC" }),
                  $(go.TextBlock, { margin: 4 },  new go.Binding("text", "key"))
                )} );
        return temp;
    }

    getNodeTemplate_1() {
        const $ = go.GraphObject.make;
        var d = $(go.Node, "Auto",
            $(go.Shape, "RoundedRectangle",  new go.Binding("fill", "color")),  // shape.fill = data.color
            $(go.TextBlock,   { margin: 5 },  new go.Binding("text", "key"))  // textblock.text = data.key
        );
        return d;

    }


    getNodeTemplate_G(textProp:string, portArrayProp:string): any {
        const $ = go.GraphObject.make;    
        var portMenu = this.getUpPortMenu();
        var portSize = new go.Size(15, 8);
        var treeExpanderButton = $(go.Panel, { height: 15 }, $("TreeExpanderButton"));
        
        // the node template
        // includes a panel on each side with an itemArray of panels containing ports
        var nodeTemplate =
            $(go.Node, "Table",{ width:150, height:100,
                 locationObjectName: "BODY", 
                 locationSpot: go.Spot.Center,
                  selectionObjectName: "BODY"
                    // contextMenu: nodeMenu
            },
                { defaultAlignment: go.Spot.Center },
                $(go.RowColumnDefinition, { column: 0, width:150, height: 150 }),//image
                $(go.RowColumnDefinition, { column: 1, width: 150, height: 50 }),//text
                                      
                // the body
                $(go.Panel, "Table",
                { defaultAlignment: go.Spot.Left },
                $(go.RowColumnDefinition, { column: 0, width:150, height: 50 }),//image
                $(go.RowColumnDefinition, { column: 1, width: 100, height: 50 }),//text
                 {
                        row: 0, 
                        column: 0,
                        background:"green",
                        name: "BODY",
                        stretch: go.GraphObject.Fill
                    },
                    $(go.TextBlock,{ row:0 }, new go.Binding("text","img")),
                    $(go.TextBlock,
                        { background:"yellow", row:1, margin: 10, textAlign: "center", font: "14px Segoe UI,sans-serif", stroke: "white", editable: true },
                        new go.Binding("text", textProp).makeTwoWay())
                ), // end Auto Panel body      
            
            
                // the Panel holding the bottom port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.bottomArray
                $(go.Panel, "Horizontal",{background:"black", row:1, column:1},
                    new go.Binding("itemArray", portArrayProp),
                    {
                        row: 1, column: 1,
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "bottom",
                                    fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(0, 1)
                                    },
                                    new go.Binding("fill", "portColor"))
                            ) // end itemTemplate
                    }
                ) // end Horizontal Panel

            ); // end Node

        return nodeTemplate;
    }


    getNodeTemplate(): any {
        const $ = go.GraphObject.make;
        var portSize = new go.Size(8, 10);
        var portMenu = this.getUpPortMenu();
        var portSize = new go.Size(15, 8);

        var treeExpanderButton = $(go.Panel, { height: 15 }, $("TreeExpanderButton"));
        // the node template
        // includes a panel on each side with an itemArray of panels containing ports
        var nodeTemplate =
            $(go.Node, "Table",
                {
                    locationObjectName: "BODY",
                    locationSpot: go.Spot.Center,
                    selectionObjectName: "BODY"
                    // contextMenu: nodeMenu
                },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                // the body
                $(go.Panel, "Auto",
                    {
                        row: 1, column: 1, name: "BODY",
                        stretch: go.GraphObject.Fill
                    },
                    $(go.Shape, "RoundedRectangle",
                        {
                            fill: "#369", stroke: null, strokeWidth: 0,
                            minSize: new go.Size(156, 70)
                        }),
                    $(go.TextBlock,
                        { margin: 10, textAlign: "center", font: "14px Segoe UI,sans-serif", stroke: "white", editable: true },
                        new go.Binding("text", "name").makeTwoWay())
                ), // end Auto Panel body

                // the Panel holding the left port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.leftArray
                $(go.Panel, "Vertical",
                    new go.Binding("itemArray", "leftArray"),
                    {
                        row: 1, column: 0,
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "left", // internal property to make it easier to tell which side it's on
                                    fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
                                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                                    contextMenu: portMenu
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(1, 0)
                                    },
                                    new go.Binding("fill", "portColor"))
                            ) // end itemTemplate
                    }, treeExpanderButton
                ), // end Vertical Panel
                // the Panel holding the top port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.topArray
                $(go.Panel, "Horizontal",
                    new go.Binding("itemArray", "topArray"),
                    {
                        row: 0, column: 1,
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "top",
                                    fromSpot: go.Spot.Top, toSpot: go.Spot.Top,
                                    fromLinkable: true, toLinkable: true, cursor: "pointer"
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(0, 1)
                                    },
                                    new go.Binding("fill", "portColor"))
                            ) // end itemTemplate
                    }
                ), // end Horizontal Panel
                // the Panel holding the right port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.rightArray
                $(go.Panel, "Vertical",
                    new go.Binding("itemArray", "rightArray"),
                    {
                        row: 1, column: 2,
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "right",
                                    fromSpot: go.Spot.Right, toSpot: go.Spot.Right,
                                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(1, 0)
                                    },
                                    new go.Binding("fill", "portColor"))
                            ) // end itemTemplate
                    }
                ), // end Vertical Panel
                // the Panel holding the bottom port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.bottomArray
                $(go.Panel, "Horizontal",
                    new go.Binding("itemArray", "bottomArray"),
                    {
                        row: 2, column: 1,
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "bottom",
                                    fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(0, 1)
                                    },
                                    new go.Binding("fill", "portColor"))
                            ) // end itemTemplate
                    }
                ) // end Horizontal Panel

            ); // end Node

        return nodeTemplate;
    }


    //create a port menu!!!
    private getUpPortMenu(): any {
        const $ = go.GraphObject.make;
        var portMenu =  // context menu for each port
            $(go.Adornment, "Vertical",
                this.makeButton("Swap order", function (e, obj) { this.swapOrder(obj.part.adornedObject); }, null),
                this.makeButton("Change color", function (e, obj) { this.changeColor(obj.part.adornedObject); }, null)
            );
    }

    makeButton(text, action, visiblePredicate) {
        const $ = go.GraphObject.make;
        var toReturn = $("ContextMenuButton",
            $(go.TextBlock, text),
            { click: action },
            // don't bother with binding GraphObject.visible if there's no predicate
            visiblePredicate ? new go.Binding("visible", "", function (o, e) { return o.diagram ? visiblePredicate(o, e) : false; }).ofObject() : {});
        return toReturn;
    }


}