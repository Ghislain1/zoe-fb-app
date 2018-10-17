import { Injectable } from "@angular/core";

import * as go from 'gojs';


//Type of shape ...
export const SHAPE_TYPE: string[] = ["RoundedRectangle",
    "Ellipse",
    "Hexagon",
    "Cloud",
    "Procedure",
];


@Injectable()
export class NodeTemplateService {

    /**Template using  Table with bar(buttons e.g Expander) , Picture,Name, and Port place */
    getNodeTemplate_A(): any {
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        var portSize = new go.Size(15, 8);
        var deviceSize = new go.Size(200, 100);
        var imageSize = new go.Size(150, 55);

        //Expander if Gayway should be visible
        var treeExpanderButton = $(go.Panel, { height: 15 }, new go.Binding("visible", "type", (a, b) => {
            if (a == "2") {
                return true;
            }
            return false;
        }), $("TreeExpanderButton"));


        const nodeTemplate =
            $(go.Node, "Vertical",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", { fill: null, desiredSize: deviceSize }),

                    $(go.Panel, "Table",
                        treeExpanderButton,
                        $(go.Picture, { row: 1, desiredSize: imageSize }, new go.Binding("source", "img")),
                        $(go.TextBlock, { row: 2 }, new go.Binding("text", "displayName")),
                        $(go.TextBlock, { row: 3 }, new go.Binding("text", "stationAddress")))),
                $(go.Panel, "Horizontal",
                    new go.Binding("itemArray", "ports"),
                    {
                        itemTemplate:
                            $(go.Panel,
                                {
                                    _side: "bottom",
                                    fromSpot: go.Spot.Bottom,
                                    toSpot: go.Spot.Bottom,
                                    fromLinkable: true,
                                    toLinkable: true,
                                    cursor: "pointer",
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(0, 1)
                                    },
                                    new go.Binding("fill", "portColor"))
                            )  // end itemTemplate
                    }
                ));
        return nodeTemplate;
    }


    /**Template using  Table with bar(buttons e.g Expander) , Picture,Name, and Port place */
    getNodeTemplateSimple(): any {
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        var portSize = new go.Size(15, 8);
        var expanderSize = new go.Size(15, 15);
        var deviceSize = new go.Size(200, 110);
        var imageSize = new go.Size(150, 55);
        //Expander if Gayway should be visible
        // var treeExpanderButton = $(go.Panel, { height: 15 }, new go.Binding("visible", "canExpander", (a, b) => { if (a) return a; }), $("TreeExpanderButton"));

        // var btn = $(go.Panel, $(go.Shape, "Rectangle", { stroke: null, strokeWidth: 0, desiredSize: portSize, margin: new go.Margin(0, 1) }));
        const nodeTemplate =
            $(go.Node, "Vertical",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", { fill: null, stroke: 'red', desiredSize: deviceSize, }),

                    $(go.Panel, "Table",
                        // treeExpanderButton,
                        // $(go.TextBlock, { row: 1 }, new go.Binding("text", "name")),
                        $(go.Picture, { row: 1, desiredSize: imageSize }, new go.Binding("source", "img")),
                        $(go.TextBlock, { row: 2 }, new go.Binding("text", "name")),
                        $(go.TextBlock, { row: 3 }, new go.Binding("text", "category")),
                        $(go.TextBlock, { row: 4 }, new go.Binding("text", "stationAddress")))),
                // $(go.Panel, "Vertical",
                //     $(go.Panel, "Horizontal", new go.Binding("itemArray", "ports"),
                //         {
                //             itemTemplate: $("Button", $(go.TextBlock, "-"),
                //                 { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top, margin: new go.Margin(0, 1), desiredSize: expanderSize },
                //                 { visible: true })
                //         }
                //     )),
                // $(go.Panel, "Horizontal", new go.Binding("itemArray", "ports"),
                //     {
                //         itemTemplate:
                //             $(go.Panel,
                //                 {
                //                     _side: "bottom",
                //                     fromSpot: go.Spot.Bottom,
                //                     toSpot: go.Spot.Bottom,
                //                     fromLinkable: true,
                //                     toLinkable: true,
                //                     cursor: "pointer",
                //                 },
                //                 new go.Binding("portId", "portId"),
                //                 $(go.Shape, "Rectangle",
                //                     {
                //                         stroke: null, strokeWidth: 0,
                //                         desiredSize: portSize,
                //                         margin: new go.Margin(0, 1)
                //                     },
                //                     new go.Binding("fill", "portColor"))
                //             )  // end itemTemplate
                //     }
                // )
            );
        return nodeTemplate;
    }

    /**Template als Table title , Pic and Name, Port place , Port with Dash | */
    getNodeTemplate_2(): any {
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        var portSize = new go.Size(15, 8);
        var deviceSize = new go.Size(200, 100);
        var imageSize = new go.Size(150, 65);
        const nodeTemplate =
            $(go.Node, "Vertical",
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle", { fill: null, desiredSize: deviceSize }),

                    $(go.Panel, "Table",
                        $(go.TextBlock, { row: 0 }, new go.Binding("text", "type")),
                        $(go.Picture, { row: 1, desiredSize: imageSize }, new go.Binding("source", "img")),
                        $(go.TextBlock, { row: 2 }, new go.Binding("text", "name")))),
                $(go.Panel, "Horizontal",
                    new go.Binding("itemArray", "bottomArray"),
                    {
                        itemTemplate:
                            $(go.Panel, "Vertical",
                                {
                                    _side: "bottom",
                                    name: "COLLAPSIBLE",
                                    fromSpot: go.Spot.Bottom,
                                    toSpot: go.Spot.Bottom,
                                    fromLinkable: true,
                                    toLinkable: true,
                                    cursor: "pointer",
                                },
                                new go.Binding("portId", "portId"),
                                $(go.Shape, "Rectangle", {
                                    stroke: null, strokeWidth: 0,
                                    desiredSize: new go.Size(2, 20),
                                    margin: new go.Margin(0, 1)
                                }),
                                $(go.Shape, "Rectangle",
                                    {
                                        stroke: null, strokeWidth: 0,
                                        desiredSize: portSize,
                                        margin: new go.Margin(0, 1)
                                    },
                                    new go.Binding("fill", "portColor"))
                            )  // end itemTemplate
                    }
                )
            );
        return nodeTemplate;
    }







    /** Hast expander  */
    getNodeTemplate_4(): any {
        const $ = go.GraphObject.make;
        var portMenu = this.getUpPortMenu();
        var portSize = new go.Size(15, 8);
        var treeExpanderButton = $(go.Panel, { height: 15 }, $("TreeExpanderButton"));

        // the node template
        // includes a panel on each side with an itemArray of panels containing ports
        var nodeTemplate =
            $(go.Node, "Table", {
                width: 150, height: 100,
                locationObjectName: "BODY",
                locationSpot: go.Spot.Center,
                selectionObjectName: "BODY"
                // contextMenu: nodeMenu
            },
                { defaultAlignment: go.Spot.Center },
                $(go.RowColumnDefinition, { column: 0, width: 150, height: 150 }),//image
                $(go.RowColumnDefinition, { column: 1, width: 150, height: 50 }),//text

                // the body
                $(go.Panel, "Table",
                    { defaultAlignment: go.Spot.Left },
                    $(go.RowColumnDefinition, { column: 0, width: 150, height: 50 }),//image
                    $(go.RowColumnDefinition, { column: 1, width: 100, height: 50 }),//text
                    {
                        row: 0,
                        column: 0,
                        background: "green",
                        name: "BODY",
                        stretch: go.GraphObject.Fill
                    },
                    $(go.TextBlock, { row: 0 }, new go.Binding("text", "img")),
                    $(go.TextBlock,
                        { background: "yellow", row: 1, margin: 10, textAlign: "center", font: "14px Segoe UI,sans-serif", stroke: "white", editable: true },
                        new go.Binding("text", "name").makeTwoWay())
                ), // end Auto Panel body      


                // the Panel holding the bottom port elements, which are themselves Panels,
                // created for each item in the itemArray, bound to data.bottomArray
                $(go.Panel, "Horizontal", { background: "black", row: 1, column: 1 },
                    new go.Binding("itemArray", "bottomArray"),
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


    getNodeTemplate_11(): any {
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

    private makeItemTemplate(leftside) {
        const $ = go.GraphObject.make;
        var UnselectedBrush = "lightgray";  // item appearance, if not "selected"
        var SelectedBrush = "green";   // item appearance, if "selected"
        return $(go.Panel, "Auto",
            { margin: new go.Margin(1, 0) },  // some space between ports
            $(go.Shape,
                {
                    name: "SHAPE",
                    fill: UnselectedBrush, stroke: "gray",
                    geometryString: "F1 m 0,0 l 5,0 1,4 -1,4 -5,0 1,-4 -1,-4 z",
                    spot1: new go.Spot(0, 0, 5, 1),  // keep the text inside the shape
                    spot2: new go.Spot(1, 1, -5, 0),
                    // some port-related properties
                    toSpot: go.Spot.Left,
                    toLinkable: leftside,
                    fromSpot: go.Spot.Right,
                    fromLinkable: !leftside,
                    cursor: "pointer"
                },
                new go.Binding("portId", "name")),
            $(go.TextBlock,
                new go.Binding("text", "name"),
                { // allow the user to select items -- the background color indicates whether "selected"
                    isActionable: true,
                    //?? maybe this should be more sophisticated than simple toggling of selection
                    click: function (e, tb) {
                        var shape = tb.panel.findObject("SHAPE");
                        if (shape !== null) {
                            // don't record item selection changes
                            var oldskips = shape.diagram.skipsUndoManager;
                            shape.diagram.skipsUndoManager = true;
                            // toggle the Shape.fill
                            if (shape.fill === UnselectedBrush) {
                                shape.fill = SelectedBrush;
                            } else {
                                shape.fill = UnselectedBrush;
                            }
                            shape.diagram.skipsUndoManager = oldskips;
                        }
                    }
                })
        );
    }

    collapseFrom(node, start) {
        if (node.data.isCollapsed) return;
        node.diagram.model.setDataProperty(node.data, "isCollapsed", true);
        if (node !== start) node.visible = false;
        node.findNodesOutOf().each(this.collapseFrom);
    }

    expandFrom(node, start): void {
        if (!node.data.isCollapsed) return;
        node.diagram.model.setDataProperty(node.data, "isCollapsed", false);
        if (node !== start) node.visible = true;
        node.findNodesOutOf().each(this.expandFrom);
    }

    ggd(): any {
        const $ = go.GraphObject.make;
        var btn = $("Button",  // a replacement for "TreeExpanderButton" that works for non-tree-structured graphs
            // assume initially not visible because there are no links coming out
            { visible: false },
            // bind the button visibility to whether it's not a leaf node
            new go.Binding("visible", "isTreeLeaf",
                function (leaf) { return !leaf; })
                .ofObject(),
            $(go.Shape,
                {
                    name: "ButtonIcon",
                    figure: "MinusLine",
                    desiredSize: new go.Size(6, 6)
                },
                new go.Binding("figure", "isCollapsed",  // data.isCollapsed remembers "collapsed" or "expanded"
                    function (collapsed) { return collapsed ? "PlusLine" : "MinusLine"; })),
            {
                click: function (e, obj) {
                    e.diagram.startTransaction();
                    var node = obj.part;
                    if (node.data.isCollapsed) {
                        this.expandFrom(node, node);
                    } else {
                        this.collapseFrom(node, node);
                    }
                    e.diagram.commitTransaction("toggled visibility of dependencies");
                }
            });
        return btn;
    }

}