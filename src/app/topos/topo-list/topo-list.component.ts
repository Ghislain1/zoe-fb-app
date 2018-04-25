import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../core/services/node.service';
import { TopoService } from '../topo.service';

import { Node } from '../../core/models/bs/node'


@Component({
  selector: 'app-topo-list',
  templateUrl: './topo-list.component.html',
  styleUrls: ['./topo-list.component.css']
})
export class TopoListComponent implements OnInit {
  nodes: Node[];

  constructor(private topoService: TopoService) { }

  ngOnInit() {
    this.getTopos();
  }

  getTopos(): void {
    this.topoService.getNodes().subscribe(nodes => this.nodes = nodes);
  }

  add(displayName: string): void {
    displayName = displayName.trim();
    if (!displayName) {
      return;
    }
    this.topoService.addNode({ displayName } as Node)
      .subscribe(node => {
        this.nodes.push(node);
      });
  }

  delete(node: Node): void {
    this.nodes = this.nodes.filter(h => h !== node);
    this.topoService.deleteNode(node).subscribe();
  }

}
