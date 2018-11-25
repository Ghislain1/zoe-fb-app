import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './models/message';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Subject, Observable, interval } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  messageList: string[] = [];
  message: Message = {
    author: "Ghis",
    message: " I love this Game !!! ",
  }

  constructor(private chatService: ChatService) {

    this.chatService.messages$.subscribe(ok => {
      console.log(ok);
      const msg = `${ok.author} says: ${ok.message} `;
      this.messageList.push(msg);
    });
  }

  ngOnInit(): void {

  }

  sendMsg() {
    alert(this.message);

    this.chatService.messages$.next(this.message);
    this.message.message = '';
  }



}