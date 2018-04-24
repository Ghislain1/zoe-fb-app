import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Topology } from '../../core/models/topology';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MessageService } from '../../core/services/message.service';
import { NodeService } from '../../core/services/node.service';
import { LoggingService } from '../../core/services/logging.service';



@Component({
  selector: 'app-topology-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  ////This represents a topology because he is master and he gets children
  topology: Topology;
  topology$: Observable<Topology>;
  editName: string;
  selectedId: string | number;
  topologyJson: string;



  @ViewChild('myDiagramDiv')
  diagramDiv: ElementRef;
  node$: Observable<any>;
  node: any;
  nodeJson: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loggingService: LoggingService,
    private nodeService: NodeService

  ) {
    this.node$ = this.route.paramMap.switchMap((params: ParamMap) => this.nodeService.getNodeById(params.get('id')));

  }


  ngOnInit(): void {
    console.log(JSON.stringify(this.node$, null, 6));
    this.node$.subscribe(data => {
      this.nodeJson = this.loggingService.stringify(data);
      this.node = data;
      console.log(JSON.stringify(data, null, 6));
      console.log("JSON.stringify(data, null, 6)#########################")

    }
    );

  }
}