import { Property } from "./property";
import { Port } from "../topology";

export class Node {

  ///Same as in Server side.
  parentId: string;
  displayName: string;
  hasChild: string;
  isRootType: boolean;
  name: string;
  ports: Port[];
  children: Node[];


  ///Extra properties

  systemTag: string;
  stationAddress: string;
  properties: Property[];

  type?: string;
  hasChannel?: boolean;
  img: string;
  key: string;
  nodeId: string;
  canExpander: boolean;

}