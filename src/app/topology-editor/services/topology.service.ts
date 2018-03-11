

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { TopologyItem, INodeData, TNodeData, Port, TLinkData } from '../database/topology-item';
 
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Topology, NodeDataArray } from '../../core/models/topology';
import { Subject } from 'rxjs/Subject';
import { NodeData } from '@angular/core/src/view';

const TOPOLOGY_ITEMS: TopologyItem[] = [];

@Injectable()
export class TopologyService {


    selectedTopologyItem: TopologyItem;
    message: string | Object;

    constructor(private httpClient: HttpClient) {

    }


    public getTopologyById(id: number | string): any {
        var topo = TOPOLOGY_ITEMS.find(t => t.id === id);       
        this.selectedTopologyItem = topo;
        return Observable.of(topo);
    }


    getAllTopologyItems() {
        return Observable.of(TOPOLOGY_ITEMS);
    }

    private createTopologyItems(items: any): any {
        console.log(items);
        if (!items) {
            return;
        }

        items.forEach((topo) => {
            console.log(topo.id);
            var item = this.createTopologyItem(topo);
            TOPOLOGY_ITEMS.push(item);
        });
        return Observable.of(TOPOLOGY_ITEMS);
    }

    private createTopologyItem(topo: Topology): TopologyItem {

        let topologyItemToReturn: TopologyItem = new TopologyItem();
        topologyItemToReturn.id = topo.id;
        topologyItemToReturn.title = topo.name;
        topologyItemToReturn.linkFromPortIdProperty = topo.linkFromPortIdProperty;
        topologyItemToReturn.linkToPortIdProperty = topo.linkToPortIdProperty;

        ////TODO: Presentation data  must be removed from bussness data
        topologyItemToReturn.copiesArrayObjects = true;
        topologyItemToReturn.copiesArrays = true;

        ///Nodes 
        topologyItemToReturn.nodeDataArray = [];
        topo.nodeDataArray.forEach(el => {

            var ports = this.getPorts(el);
            var node: TNodeData = new TNodeData(el.key, el.name, el.loc, ports);
            topologyItemToReturn.nodeDataArray.push(node);
        });

        //Links
        topologyItemToReturn.linkDataArray = [];
        if (topo.linkDataArray) {
            topo.linkDataArray.forEach(el => {

                var link: TLinkData = new TLinkData(1, el.fromPort, el.toPort, el.from, el.to);
                topologyItemToReturn.linkDataArray.push(link);


            });
        }
        return topologyItemToReturn;

    }


    private getPorts(nodeDataArray: NodeDataArray): any {

        const ports = [];

        //bottom
        if (nodeDataArray.bottomArray) {
            nodeDataArray.bottomArray.forEach(el => {
                var port: Port = new Port(el.portId, el.portColor);
                ports.push(port);

            })
        }
        //left
        if (nodeDataArray.leftArray) {
            nodeDataArray.leftArray.forEach(el => {
                var port: Port = new Port(el.portId, el.portColor);
                ports.push(port);

            })
        }

        //right
        if (nodeDataArray.rightArray) {
            nodeDataArray.rightArray.forEach(el => {
                var port: Port = new Port(el.portId, el.portColor);
                ports.push(port);

            })
        }

        //top
        if (nodeDataArray.topArray) {
            nodeDataArray.topArray.forEach(el => {
                var port: Port = new Port(el.portId, el.portColor);
                ports.push(port);

            })
        }

        return ports;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    };

    makeIntentionalError() {
        return this.httpClient.get('not/a/real/url')
            .pipe(
                catchError(this.handleError)
            );
    }

    private getEventMessage(event: HttpEvent<any>) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${event}" of size ${event.type}.`;

            case HttpEventType.UploadProgress:
                // Compute and show the % done:
                console.info("HttpEventType.UploadProgress");


            case HttpEventType.Response:
                return `File "${event.type}" was completely uploaded!`;

            default:
                return `File "${event}" surprising upload event: ${event.type}.`;
        }
    }


}