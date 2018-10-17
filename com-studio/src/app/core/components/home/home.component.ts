import { Component, OnInit } from '@angular/core';
import { TopologyNodeService } from '../../../shared/services/topology-node.service';
import { Observable } from 'rxjs';
import { TopologyNode } from '../../../shared/models/topology-node';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topologyNodeList$: Observable<TopologyNode[]>;
  topologyNodeList: TopologyNode[];
  constructor(private topologyNodeService: TopologyNodeService) { }

  ngOnInit() {
    this.topologyNodeList$ = this.topologyNodeService.getAll();
    this.topologyNodeList$.subscribe(ii => {
      this.topologyNodeList = ii;
      console.log(this.topologyNodeList$)
    });

  }

}