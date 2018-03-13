import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topology-home',
  templateUrl: './topology-home.component.html',
  styleUrls: ['./topology-home.component.css']
})
export class TopologyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     console.log("TopologyHomeComponent***********  1");
  }

}
