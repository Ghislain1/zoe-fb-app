import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import { Topology } from '../../../core/models/topology';
import { TopologyService } from '../../../core/services/topology.service';


@Component({
  selector: 'app-topology-list',
  templateUrl: './topology-list.component.html',
  styleUrls: ['./topology-list.component.css']
})
export class TopologyListComponent implements OnInit {
  topologies$: Observable<Topology[]>;
  selectedId: number;
  sidebarAction: boolean;
  constructor(
    private topologyService: TopologyService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    console.log("TopologyHomeComponent***********  2");
    this.topologies$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.topologyService.getTopologies();
      });
  }
  showOrHideSideBar() {
    this.sidebarAction = !this.sidebarAction;

  }
}