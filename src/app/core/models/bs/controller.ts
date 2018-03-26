import { Channel } from "./channel";
import { Property } from "./property";
import { Status } from "./status";

export class Controller {
  property: Property;
  channel: Channel;
  status: Status;

  //standart properties
  systemTag: string;
  displayName: string;
  byteOrder: string;
  configMD5: string;
  linkColor?: string;

  deviceAccessPath: string;
  linkCstationAddressolor?: string;

  configMD51: string;
  linkColor11?: string;

}

