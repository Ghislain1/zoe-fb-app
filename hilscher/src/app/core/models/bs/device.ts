import { Property } from "./property";
import { Port } from "../topology";

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

  canExpander: boolean;

}