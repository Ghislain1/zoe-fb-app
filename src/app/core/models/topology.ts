
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

export interface BottomArray {
    portColor: string;
    portId: string;
}

export interface RightArray {
    portColor: string;
    portId: string;
}

export class NodeDataArray {
    public key: number;
    name: string;
    loc: string;
    leftArray: LeftArray[];
    topArray: TopArray[];
    bottomArray: BottomArray[];
    rightArray: RightArray[];
}

export interface LinkDataArray {
    from: number;
    to: number;
    fromPort: string;
    toPort: string;
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

export class Topology implements ITopology {
    constructor(public id: number, public name: string) {
        this.class = name;
        this.id = id;
    }

    class: string;
    copiesArrays: boolean;
    copiesArrayObjects: boolean;
    linkFromPortIdProperty: string;
    linkToPortIdProperty: string;
    nodeDataArray: NodeDataArray[];
    linkDataArray: LinkDataArray[];
}

