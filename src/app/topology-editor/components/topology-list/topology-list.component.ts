import { Component, OnInit } from '@angular/core';
import { TopologyService } from '../../services/topology.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TopologyItem } from '../../database/topology-item';

import { TopologyEvent } from '../../database/topology-event';
import { TopologyAggregator } from '../../services/topology.aggregator';


@Component({
    selector: 'app-topology-list',
    templateUrl: './topology-list.component.html',
    styleUrls: ['./topology-list.component.css']
})
export class TopologyListComponent implements OnInit {
    title = 'Topology List Component works!! ';

    topologyItems$: Observable<TopologyItem[]>;
    isTopoSelected: boolean;
    constructor(private topologyService: TopologyService, private topologyAggregator: TopologyAggregator, private route: ActivatedRoute) { }

    ngOnInit() {
        this.isTopoSelected = false;
        this.topologyItems$ = this.topologyService.getAllTopologyItems();
    }

    select(topologyItem) {
        this.isTopoSelected = true;
        let id = topologyItem.id;
        //this.eventAggregator.publish(id);

        let topologyEvent = new TopologyEvent(id, topologyItem.name);

        this.topologyAggregator.publish(topologyEvent);

    }

}
