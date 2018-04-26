import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  outputList: string[];
  constructor(private messageService: MessageService) {

  }

  ngOnInit() {

    this.outputList = this.messageService.messages;
    console.info(this.outputList);
  }

}
