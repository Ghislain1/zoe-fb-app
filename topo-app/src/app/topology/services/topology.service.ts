import { Injectable } from "@angular/core";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


import { HttpClient } from "@angular/common/http";

import { catchError } from "rxjs/operators";

import { Observable } from 'rxjs/Rx';
import { HandleError } from "../../shared/handlers/handler-error";
import { Topology } from "../models/topology";
import { ConfigService } from "../../shared/services/config-service";
import { DeviceService } from "./device.service";
import { LinkService } from "./link.service";
import { HttpErrorHandler } from "../../shared/handlers/http-error-handler";
import { LoggingService } from "../../shared/services/logging.service";
import { Link } from "../models/link";
import { Device } from "../models/device";
import { Config } from "../../shared/Config";
import { forEach } from "@angular/router/src/utils/collection";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MessageService } from "../../shared/services/message.service";



const TOPOLOGIES = [];

@Injectable()
export class TopologyService {

    updateTopology(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    private configuration: Config | any[];
    private handleError: HandleError;
    private indexTopo: number;
    topologyUrl: string;
    private topologies$: BehaviorSubject<Topology[]> = new BehaviorSubject<Topology[]>(TOPOLOGIES);


    constructor(
        private httpClient: HttpClient,
        private configService: ConfigService,
        private deviceService: DeviceService,
        private linkService: LinkService,
        private loggingService: LoggingService,
        private messageService: MessageService,
        private httpErrorHandler: HttpErrorHandler) {

        this.handleError = httpErrorHandler.createHandleError('TodoService');

        this.indexTopo = 0;

    }

    /**
     * this method returns the list of topologie by given the url server whrer the topologie should be come.
     */
    public getTopologyList(url: string): Observable<Topology[]> {


        let devices$ = this.deviceService.getDevices(url);

        //Transform each device to topology using map..
        return devices$.map((list, index) => {
            this.log("Get list of topologies started..." + list.length);
            let topologyArray: Topology[] = [];
            list.forEach(value => {

                if (value.isRoot) {
                    let topo = this.createTopo(value, null);
                    topologyArray.push(topo);
                }
            });

            this.log("Get list of topologies finished...");
            return topologyArray;
        });



    }

    public save(json: string): void {

        this.loggingService.stringify(json);
    }

    public getTopology(systemTag: string, urlServer: string): Observable<Topology> {

        //Device
        let anyDevice$ = this.deviceService.getDevice(systemTag, urlServer);

        //Transform each device to topology using map..
        return anyDevice$.map((list, index) => {
            this.log("ONE Topo has started...");
            let topology: Topology;
            list.forEach(value => {

                this.log("Check root(Master or Not)...");
                if (value.isRoot) {
                    topology = this.createTopo(value, null);
                }

            });

            this.log("Return observable of Topo with ..." + topology);
            return topology;
        });
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
        const combined = Observable.forkJoin(dArray$, linkData$, (contr, linkData) => { return this.createTopo(contr[0], linkData) });

        return combined;

    }



    private createTopo(device: Device, linkData: Link[]): Topology {


        let topo = new Topology(device);
        topo.index = ++this.indexTopo;


        topo.links = this.createLinkData(linkData);
        this.log("IS CREATED  ..."+ topo.name + "  "+ topo.id);

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

    private createLinkData(linkD: Link[]): Link[] {
        if (!linkD || !linkD) {
            return [];// no links has been found!!
        }
        const linkArray: Link[] = [];
        for (let index = 0; index < linkD.length; index++) {
            const link = linkD[index];
            link.linkColor = link.linkColor;
            if (!link.linkColor) {
                link.linkColor = "#74512";
            }
            linkArray.push(link);
        }

        //additinal
        return linkArray;
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('TopologyService: ' + message);
    }



}
