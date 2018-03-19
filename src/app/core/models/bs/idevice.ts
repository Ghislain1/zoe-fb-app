import { IPort } from "./iport";



export interface IDevice {
    id: string;
    ports: IPort[];
    name: string;
    type: string;
    img: string;
    key: string;
    state: string;
    vendor: string;
    loc: string;
    supportProtocol: string;
    dtmInfo: string;
    version: string;
}

