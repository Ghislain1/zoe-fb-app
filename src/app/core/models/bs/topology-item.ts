import { IDevice } from "./idevice";
import { ILink } from "./ilink";
import { IProcessData } from "./iprocessData";

export interface ITopologyItem {

    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
    numberDevices: number;
    protocols: string;
    description: string;
    processData: IProcessData;
}

export class TopologyItem implements ITopologyItem {

    processData: IProcessData;
    numberDevices: number;
    protocols: string;
    description: string;
    id: number;
    name: string;
    devices: IDevice[];
    links: ILink[];
}

