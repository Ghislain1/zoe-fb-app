import { Component, OnInit } from '@angular/core';
import { OutputService } from './services/output.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  outputList: string [];
  constructor(private outputService: OutputService) { 

  }

  ngOnInit() {

    this.outputList= this.outputService.getAll();
    console.info(this.outputList);
  }

}
