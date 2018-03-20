import { IDevice } from "./bs/idevice";
import { IPort } from "./bs/iport";
import { ITopologyItem } from "./bs/topology-item";
import { ILink } from "./bs/ilink";
import { IProcessData } from "./bs/iprocessData";

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

export class NodeDataArray implements IDevice {
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

export class Topology implements ITopology, ITopologyItem {
    processData: IProcessData;
    constructor(public id: number, public name: string) {
        this.class = name;
        this.id = id;
    }
    devices: IDevice[];
    links: ILink[];
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

