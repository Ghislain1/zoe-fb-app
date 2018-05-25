import { Injectable } from "@angular/core";

import * as go from 'gojs';


@Injectable()
export class DiagramService {

  layout(myDiagram: go.Diagram) {
    myDiagram.startTransaction("change Layout");
    var lay = myDiagram.layout;
  }

  // create an array of data describing randomly colored and sized nodes
  createArrayData(total: number, numberGateWay?: number) {
    var nodeDataArray = [];
    for (var i = 0; i < total; i++) {
      nodeDataArray.push({
        key: i,
        id: i,
        name: "Device Nr. " + i.toString(),
        fill: go.Brush.randomColor(),

        ports: this.createNodePortArray(2)
      });
    }

    let l = nodeDataArray.length;
    for (var i = 0; i < l + numberGateWay; i++) {
      nodeDataArray.push({
        key: i,
        id: i,
        name: "Gateway Nr. " + i.toString(),
        fill: go.Brush.randomColor(),
        size: new go.Size(250, 150),
        ports: this.createNodePortArray(3),
      });
      return nodeDataArray;
    }
  }

  private createNodePortArray(total: number) {
    var nodePortArray = [];
    for (var i = 0; i < total; i++) {
      nodePortArray.push({
        portColor: "red",
        portId: i,
        name: "Device Nr. " + i.toString(),
        fill: go.Brush.randomColor(),
        size: new go.Size(8, 17)
      });
    }
    return nodePortArray;
  }

  // enable or disable a particular button
  enable(name, ok) {
    //  var button = document.getElementById(name) as HTMLButtonElement;
    //  if (button) button.disabled = !ok;
  }

  // enable or disable all command buttons
  enableAll(diagram) {
    var cmdhnd = diagram.commandHandler;
    this.enable("SelectAll", cmdhnd.canSelectAll());
    this.enable("Cut", cmdhnd.canCutSelection());
    this.enable("Copy", cmdhnd.canCopySelection());
    this.enable("Paste", cmdhnd.canPasteSelection());
    this.enable("Delete", cmdhnd.canDeleteSelection());
    this.enable("Group", cmdhnd.canGroupSelection());
    this.enable("Ungroup", cmdhnd.canUngroupSelection());
    this.enable("Undo", cmdhnd.canUndo());
    this.enable("Redo", cmdhnd.canRedo());
  }
}