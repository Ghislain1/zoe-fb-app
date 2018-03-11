import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { TopologyEvent } from "../database/topology-event";



@Injectable()
export class TopologyAggregator {

    // Observable string sources
    private source = new Subject<TopologyEvent>();
    // Observable string streams
    private source$ = this.source.asObservable();

    // Service message commands
    publish(topologyEvent: TopologyEvent) {
        this.source.next(topologyEvent);
    }


    getSource() {
        return this.source$;
    }

}