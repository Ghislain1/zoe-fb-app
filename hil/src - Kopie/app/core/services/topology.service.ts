import { Injectable } from "@angular/core";
import { Topology, NodeDataArray, BottomArray, LinkDataArray } from "../../core/models/topology";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ConfigService } from "../../core/services/config-service";
import { HttpClient } from "@angular/common/http";
import { HttpErrorHandler, HandleError } from "../../core/services/http-error-handler.service";

import { catchError } from "rxjs/operators";

import { Observable } from 'rxjs/Rx';

import { ITopologyItem, TopologyItem } from "../../core/models/bs/topology-item";


import { Device } from "../models/bs/device";
import { DeviceService } from "./device.service";
import { LinkService } from "./link.service";
import { Controller } from "../models/bs/controller";
import { Link } from "../models/bs/link";
import { link } from "fs";
import { LinkData } from "../models/bs/link-data";
import { LoggingService } from "./logging.service";

const TOPOLOGIES = [];

@Injectable()
export class TopologyService {


  private handleError: HandleError;
  topologyUrl: string;
  private topologies$: BehaviorSubject<Topology[]> = new BehaviorSubject<Topology[]>(TOPOLOGIES);


  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private deviceService: DeviceService,
    private linkService: LinkService,
    private loggingService: LoggingService,
    private httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('TodoService');

  }


  public save(json: string): void {

    this.loggingService.stringify(json);


  }

  /**
   * 
   * This method provide a topology with his devices and links Thrick: forkJoin Method should be use3d
   *
   * @class Observable<T>
   */
  getTopologyBySystemTag(systemTag: string | number): Observable<Topology> {


    //links
    let stzr: string = systemTag as string;
    var splitted = stzr.split(" ", 3);
    let linkData$ = this.linkService.getLinkBySystemTag(systemTag);

    //Device
    let dArray$ = this.deviceService.getDeviceBySystemTag(systemTag);

    //forjoinf for paarallel  query to join it.
    const combined = Observable.forkJoin(dArray$, linkData$, (contr, linkData) => { return this.createTopo(contr, linkData) });

    return combined;

  }

  private createTopo(devices: Device[], linkData: LinkData): Topology {


    let topo = new Topology(devices);
    topo.links = this.createLinkData(linkData);


    //Push master or controler too!!
    /* var masterD = new Device();
     masterD.displayName = controller.displayName.slice(0, 20);
     masterD.stationAddress = controller.stationAddress;
     masterD.type = controller.channel.displayName;
     masterD.hasChannel = true;
     masterD.ports = controller.ports;
     masterD.systemTag = controller.systemTag;
     topo.nodes.push(masterD);
 
     topo.nodes.reverse();*/

    this.checkIfExpander(topo);

    //img setting
    this.setImage(topo.nodes);
    return topo;
  }



  private checkIfExpander(topo: Topology) {
    topo.nodes.forEach(element => {

      //TODO: this must been movec another place  key is import !!
      element.key = element.systemTag;
      if (!element.ports) {
        this.loggingService.showAlert("checkIfExpander--->  No Port on Device ");
      }
      if (element.ports.length >= 3) {
        element.type = "2";
        element.canExpander = true;
        // alert(element.displayName);
      }
    });
  }

  private setImage(devices: Device[]): void {

    devices.forEach(nodeData => {
      if (nodeData.hasChannel) {
        nodeData.img = "assets/images/netX51.PNG";
      }
      else if (nodeData.type == "2") {
        nodeData.img = "assets/images/NetTap.PNG";
      }
      else {
        nodeData.img = "assets/images/cfix.PNG";
      }

    })
  }

  private createLinkData(linkD: LinkData): Link[] {
    if (!linkD || !linkD.links) {
      return [];// no links has been found!!
    }
    const linkArray: Link[] = [];
    for (let index = 0; index < linkD.links.length; index++) {
      const link = linkD.links[index];
      link.linkColor = link.linkColor;
      if (!link.linkColor) {
        link.linkColor = "#74512";
      }
      linkArray.push(link);
    }

    //additinal
    return linkArray;
  }


  //TODO: should remove  this ,ethod.
  private createNodeDataArray(devices: Device[]): NodeDataArray[] {
    let nodeDataArray: NodeDataArray[] = [];
    devices.forEach(dv => {
      let v = new NodeDataArray();
      v.name = dv.displayName;
      v.type = dv.stationAddress;
      nodeDataArray.push(v);
    })

    //needs  for image  
    this.setImage(devices);
    return nodeDataArray;
  };

}