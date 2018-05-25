import { Device } from "./device";
import { Link } from "./link";

export class Topology {

    constructor(public systemTag: string, public devices?: Device[], public linkList?: Link[]) {
        this.links = linkList;
        this.nodes = devices;
        this.id = systemTag;

    }
    id: string;
    name: string;
    links?: Link[];
    nodes: Device[]; // All devices includes Controller
}