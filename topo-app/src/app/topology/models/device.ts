import { Property } from "./property";
import { Port } from "./port";

export class Device {

    displayName: string;
    systemTag: string;
    stationAddress: string;
    properties: Property[];
    ports: Port[];
    type?: string;
    hasChannel?: boolean;
    img: string;
    key: string;
    deviceList: Device [];
  
    canExpander: boolean;
  
  }