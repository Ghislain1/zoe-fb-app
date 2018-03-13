import { Injectable } from "@angular/core";
import { Topology } from "../../core/models/topology";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ConfigService } from "../../core/services/config-service";
import { HttpClient } from "@angular/common/http";
import { HttpErrorHandler, HandleError } from "../../core/services/http-error-handler.service";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

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
    , error=> {}, () => {this.initAll();    });
   
  }


 initAll(){

  let dd=  this.httpClient.get<Topology[]>(this.topologyUrl)
  .pipe(
    catchError(this.handleError('getTopologies() V2', []))
  );
   
 }
   

  getTopologies(){
    return  this.httpClient.get<Topology[]>(this.topologyUrl);
  }
 

  getTopology(id: number | string) {
    return this.getTopologies()
      .map(topologies => topologies.find(topo => topo.id === +id));
  }

  addTopology(name: string) {
    name = name.trim();
    if (name) {
      let topology = new Topology(2000, name);
      TOPOLOGIES.push(topology);
      this.topologies$.next(TOPOLOGIES);
    }
  }
}