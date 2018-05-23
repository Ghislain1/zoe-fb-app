import { Device } from "./device";
import { Link } from "./link";

export class Topology {

    constructor(public devices?: Device [], public linkList?: Link[]) {
        this.links = linkList;
        this.nodes = devices;

    }
    name: string;
    links?: Link[];
    nodes: Device[]; // All devices includes Controller