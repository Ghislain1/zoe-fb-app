import { IDevice } from "./idevice";
import { ILink } from "./ilink";

export interface ITopologyItem {
   
    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
}

export class TopologyItem implements ITopologyItem {
   
    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
}

