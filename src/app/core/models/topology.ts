
import { IPort } from "./bs/iport";
import { ITopologyItem } from "./bs/topology-item";
import { ILink } from "./bs/ilink";
import { Device } from "./bs/device";
import { Link } from "./bs/link";
import { Controller } from "./bs/controller";


export interface LeftArray {
    portColor: string;
    portId: string;
}
export class Port {
    constructor(public portColor: string, public portId: string) {
        this.portColor = portColor;
        this.portId = portId;
    }

}


export interface TopArray {
    portColor: string;
    portId: string;
}

export interface IBottomArray {
    portColor: string;
    portId: string;
}

export class BottomArray implements IBottomArray {
    portColor: string;
    portId: string;
}

export interface RightArray {
    portColor: string;
    portId: string;
}

export class NodeDataArray {
    id: string;
    ports: IPort[];
    name: string;
    type: string;
    img: string;
    key: string;
    state: string;
    vendor: string;
    loc: string;
    supportProtocol: string;
    dtmInfo: string;
    version: string;
    bottomArray: BottomArray[];

}

export class LinkDataArray implements ILink {
    id: string;
    name: string;
    type: string;
    from: string;
    to: string;
    fromPort: string;
    toPort: string;

    //additional properties
    linkColor?: string;
}

export interface ITopology {
    class: string;
    copiesArrays: boolean;
    copiesArrayObjects: boolean;
    linkFromPortIdProperty: string;
    linkToPortIdProperty: string;
    nodeDataArray: NodeDataArray[];
    linkDataArray: LinkDataArray[];
}

export class Topology {

    constructor(public masterOrController: Controller, public linkList?: Link[]) {
        this.links = linkList;
        this.nodes = this.masterOrController.channel.devices;

    }
    name: string;
    links?: Link[];
    nodes: Device[]; // All devices includes controller

    //should be removed!! 
    id: string;
    numberDevices: number;
    protocols: string;
    description: string;
    class: string;
    copiesArrays: boolean;
    copiesArrayObjects: boolean;
    linkFromPortIdProperty: string;
    linkToPortIdProperty: string;
    nodeDataArray: NodeDataArray[];
    linkDataArray: LinkDataArray[];
}

