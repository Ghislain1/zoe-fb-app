import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../core/services/logging.service';

@Component({
  selector: 'app-topology-home',
  templateUrl: './topology-home.component.html',
  styleUrls: ['./topology-home.component.css']
})
export class TopologyHomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    //this.loggingService.showAlert(" -------Topo Parent Component----------");
  }

}
