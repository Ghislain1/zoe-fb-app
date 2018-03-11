



export interface IPort {
    portId: string;
    portColor: string;
}





export interface INodeData {
    key: number;
    name: string;
    loc: string;
    portArray: IPort[];
}

export interface ILinkData {
    key: number;
    toPort: string;
    fromPort: string;
    from: string | number;
    to: string | number;
}

export interface ITopologyItem {
    id: number;
    copiesArrays: boolean;
    copiesArrayObjects: boolean;
    linkFromPortIdProperty?: any;
    linkToPortIdProperty?: any;
    title?: string;
    linkDataArray?: ILinkData[];
    nodeDataArray: INodeData[];
    fullPath?: any;
}


export class TNodeData implements INodeData {
    constructor(public key: number, public name: string, public loc: string, public portArray: Port[]) { }




}

export class TLinkData implements ILinkData {
    constructor(public key: number, public fromPort: string, public toPort: string, public from: string | number, public to: string | number) {
    }


}

export class Port implements IPort {
    constructor(public portId: string, public portColor: string) {
    }
}


export class TopologyItem implements ITopologyItem {
    id: number;
    copiesArrays: boolean;
    copiesArrayObjects: boolean;
    linkFromPortIdProperty?: any;
    linkToPortIdProperty?: any;
    title?: string;
    linkDataArray?: TLinkData[];
    nodeDataArray: TNodeData[];
    fullPath?: any;
}


