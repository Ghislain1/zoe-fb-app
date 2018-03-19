import { IDevice } from "./idevice";
import { ILink } from "./ilink";

export interface ITopologyItem {

    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
    numberDevices: number;
    protocols: string;
    description: string;
}

export class TopologyItem implements ITopologyItem {

    numberDevices: number;
    protocols: string;
    description: string;
    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
}

