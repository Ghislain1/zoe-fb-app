import { Injectable } from "@angular/core";
import { Topology, NodeDataArray, BottomArray, LinkDataArray } from "../../core/models/topology";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ConfigService } from "../../core/services/config-service";
import { HttpClient } from "@angular/common/http";
import { HttpErrorHandler, HandleError } from "../../core/services/http-error-handler.service";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { ITopologyItem, TopologyItem } from "../../core/models/bs/topology-item";
import { IDevice } from "../models/bs/idevice";
import { ILink } from "../models/bs/ilink";

const TOPOLOGIES = [];

@Injectable()
export class TopologyService {

  static nextCrisisId = 100;
  private handleError: HandleError;
  topologyUrl: string;
  private topologies$: BehaviorSubject<Topology[]> = new BehaviorSubject<Topology[]>(TOPOLOGIES);


  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('TodoService');

    this.configService.getConfig_2().subscribe(ii => this.topologyUrl = ii.topologyUrl
      , error => { }, () => { this.initAll(); });

  }
  getTopologies() {

    //TODO: find out a new strategy for this!!! --->initial again before to call all topo
    this.initAll();
    return Observable.of(TOPOLOGIES);
  }

  getTopology(id: number | string) {
    return this.getTopologies()
      // (+) before `id` turns the string into a number
      .map(topos => topos.find(topo => topo.id === +id));
  }


  initAll() {
    let obArray = this.httpClient.get<TopologyItem[]>(this.topologyUrl)
      .pipe(catchError(this.handleError('initAll() ', [])));

    //Change BS to PS data.
    obArray.subscribe(topoArray => {
      let topo = undefined;

      //clear the array 
      TOPOLOGIES.splice(0, TOPOLOGIES.length);

      //fill the topo array with elements
      for (let index = 0; index < topoArray.length; index++) {
        const element = topoArray[index];
        topo = this.createTopo(element);
        TOPOLOGIES.push(topo);
      }

    });

  }

  private createTopo(topoItem: TopologyItem) {

    var name = topoItem.name;
    var id = topoItem.id
    let topology = new Topology(id, topoItem.name);


    //Devices
    topology.nodeDataArray = [];
    if (topoItem.devices) {
      topoItem.devices.forEach(device => {
        let nodeData = this.createNodeData(device);
        topology.nodeDataArray.push(nodeData);
      })
    }

    //Links
    topology.linkDataArray = [];
    if (topoItem.links) {
      topoItem.links.forEach(link => {
        let linkData = this.createLinkData(link);
        topology.linkDataArray.push(linkData);
      })
    }

    return topology;
  }

  private setImage(nodeData: NodeDataArray): void {
    if (nodeData.type == "1") {
      nodeData.img = "assets/images/netX51.PNG";
    }
    else if (nodeData.type == "2") {
      nodeData.img = "assets/images/NetTap.PNG";
    }
    else {
      nodeData.img = "assets/images/cfix.PNG";
    }

  }

  private createLinkData(link: ILink): LinkDataArray {
    let linkData = new LinkDataArray();
    linkData.from = link.from;
    linkData.fromPort = link.fromPort;
    linkData.to = link.to;
    linkData.toPort = link.toPort;

    //additinal
    linkData.linkColor = link.linkColor;
    if (!linkData.linkColor) {
      linkData.linkColor = "#74512";
    }
    return linkData;
  }


  private createNodeData(device: IDevice) {
    let nodeData = new NodeDataArray();
    nodeData.bottomArray = [];
    //create ports
    for (var i = 0; i < device.ports.length; i++) {
      let port = new BottomArray();
      port.portColor = device.ports[i].portColor;
      port.portId = device.ports[i].portId;
      nodeData.bottomArray.push(port);
    }

    //TODO does not need that any more 
    //other properties
    nodeData.name = device.name;
    nodeData.key = device.key;
    nodeData.img = device.img;
    nodeData.type = device.type;
    nodeData.state = device.state;
    nodeData.type = device.type;
    nodeData.img = device.img;
    nodeData.type = device.type;

    //needs
    nodeData.bottomArray = device.ports;
    this.setImage(nodeData);
    return nodeData;
  };





  addTopology(name: string) {
    name = name.trim();
    if (name) {
      let topology = new Topology(2000, name);
      TOPOLOGIES.push(topology);
      this.topologies$.next(TOPOLOGIES);
    }
  }
}