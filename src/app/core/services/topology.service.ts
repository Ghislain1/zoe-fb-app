import { Injectable } from "@angular/core";
import { Topology, NodeDataArray, BottomArray } from "../../core/models/topology";
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

const TOPOLOGIES = [ ];

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

    this.configService.getConfig_2().subscribe( ii=>  this.topologyUrl= ii.topologyUrl
    , error=> {}, () => {   this.initAll();    });
   
  }
  getTopologies() { return Observable.of(TOPOLOGIES); }

  getTopology(id: number | string) {
    return this.getTopologies()
      // (+) before `id` turns the string into a number
      .map(topos => topos.find(topo => topo.id === +id));
  }


 initAll(){
  let obArray=  this.httpClient.get<TopologyItem[]>(this.topologyUrl)
  .pipe( catchError(this.handleError('getTopologies() V2', [])));

  //Change Bs to PS data.
  obArray.subscribe(topoArray => {
    let topo=undefined;
    for (let index = 0; index < topoArray.length; index++) {
      const element = topoArray[index];
      topo= this.createTopo(element);
      TOPOLOGIES.push(topo);      
    }
    
  });
   
 }

 private createTopo(topoItem: TopologyItem) { 
    let  topology= new Topology(topoItem.id, topoItem.name);
    topology.nodeDataArray=[];
    topoItem.devices.forEach (device=> {
   let nodeData=  this. createNodeData( device);
   topology.nodeDataArray.push(nodeData);     
    })
   return topology;
 }
 private  createNodeData  (device:IDevice) {
  let   nodeData= new  NodeDataArray();
  nodeData.bottomArray=[];
  //create ports
  for( var i = 0; i < device.ports.length; i++ ) {  
   let port= new BottomArray ();
   port.portColor=device.ports[i].portColor;
   port.portId=device.ports[i].portId;
   nodeData.bottomArray.push(port);
  }
  //other properties
  nodeData.name= device.name;
  nodeData.key= +device.id;
  nodeData.img= device.img;
  if(!nodeData.img)
  {
    nodeData.img="assets/images/cfix.PNG";
  }


  return  nodeData;
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