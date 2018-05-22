
import { ILink } from "./ilink";


export interface ITopologyItem {

    id: number;
    name: string;

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

    links: ILink[];
}

