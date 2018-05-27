import { Device } from "./device";
import { Link } from "./link";

export class Topology {

    constructor(public device: Device, public linkList?: Link[]) {
        this.links = linkList;
        this.nodes = device.deviceList;

        //Add mastr to list
        this.nodes.push(device);
        this.id = device.systemTag;
        this.name = device.displayName;
        this.systemTag = this.id;


    }
    systemTag: string;
    id: string;
    name: string;
    index: number;
    links?: Link[];
    nodes: Device[]; // All devices includes Controller
}
