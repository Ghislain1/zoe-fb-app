import { Component, OnInit } from '@angular/core';
import { NodeService } from '../core/services/node.service';
import { Observable } from 'rxjs/Observable';
import { LoggingService } from '../core/services/logging.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  nodeList$: Observable<any[]>
  nodeList: any[]
  constructor(private router: Router, private route: ActivatedRoute, private nodeService: NodeService, private loggingService: LoggingService) {
    this.nodeList$ = this.nodeService.getAll();
  }

  ngOnInit() {
    this.nodeList$.subscribe(data => this.nodeList = data);

  }

  showTopo(nodeId: number | string) {


    // let crisisId = this.nodeId ? this.crisis.id : null;

    this.router.navigate([{ id: nodeId }], { relativeTo: this.route });

  }

}
