import { Version } from "./version";
import { Controller } from "./controller";


export class ProcessData {
  version: Version;
  type: string;
  controller: Controller;

  //standart properties
  from: string;
  to: string;
  fromPort: string;
  toPort: string;
  linkColor?: string;

}

