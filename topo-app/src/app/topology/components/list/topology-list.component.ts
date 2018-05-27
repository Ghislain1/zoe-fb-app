import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import { Topology } from '../../models/topology';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';
import { TopologyService } from '../../services/topology.service';
import { Config } from '../../../shared/Config';


@Component({
    selector: 'app-topology-list',
    templateUrl: './topology-list.component.html',
    styleUrls: ['./topology-list.component.css']
})
export class TopologyListComponent implements OnInit {
    topologies$: Observable<Topology[]>;
    private configuration: Config;


    //Store all list of Controllers or Master from processdata.
    controllers$: Observable<Device[]>;
    controllers: Device[];
    selectedSytemTag: string;
    selectedId: number;
    isSideBarActive: boolean;
    topolologyList$: Observable<Topology[]>;

    constructor(
        private topologyService: TopologyService,
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {
        this.route.data.subscribe((data: { config: Config }) => {
            this.configuration = { ...data.config };
        });

    }



    ngOnInit() {
        var urlServer = this.configuration.urlApiTopo;
        this.topolologyList$ = this.topologyService.getTopologyList(urlServer);

    }

    getControllers() {
        // this.deviceService.getDevices().subscribe(controllers => this.controllers = controllers);
    }

    showOrHideSideBar() {
        this.isSideBarActive = !this.isSideBarActive;
    }
}
