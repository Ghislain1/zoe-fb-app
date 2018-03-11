
import { Injectable } from '@angular/core';

import * as go from 'gojs';
import { Shape } from 'gojs';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * SEE : https://gojs.net/latest/intro/shapes.html
 */
@Injectable()
export class DummyShapeProvider {


    getShapeByFigure(figureName: string): Shape {
        var $ = go.GraphObject.make;  // for conciseness in defining GraphObjects

        const shapeToReturn = $(go.Shape, figureName, { fill: "lightgreen" });
        return shapeToReturn;
    }

    getAllShapeByFigure(): go.Part {
        var $ = go.GraphObject.make;  // for conciseness in defining GraphObjects
        var stackpanel = $(go.Part, "Horizontal",
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4
            }),  // default fill and stroke are "black"
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: "green"
            }),
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: "green", stroke: null
            }),
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: null, stroke: "green"
            }),
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: null, stroke: "green", strokeWidth: 3
            }),
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: null, stroke: "green", strokeWidth: 6
            }),
            $(go.Shape, {
                figure: "Club", width: 40, height: 40, margin: 4,
                fill: "green", background: "orange"
            }));
        return stackpanel;
    }

    getByUsingPanel(): go.Part {
        var $ = go.GraphObject.make;
        var myNode = $(go.Part, "Horizontal", { width: 200, height: 100 },
            $(go.Shape, { width: 40, fill: "yellow" }));
        return myNode;
    }
}