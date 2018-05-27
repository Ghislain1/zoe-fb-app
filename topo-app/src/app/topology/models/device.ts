import { Property } from "./property";
import { Port } from "./port";

export class Device {

    constructor() {

    }

    displayName: string;
    systemTag: string;
    stationAddress: string;
    properties: Property[];
    ports: Port[];
    type?: string;
    hasChannel?: boolean;
    isRoot: boolean;
    imgUrl: string;
    key: string;
    deviceList: Device[];

    canExpander: boolean;




    public stringify(): string {
        return JSON.stringify(this, null, 4)
    }

}
