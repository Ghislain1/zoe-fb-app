import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { map, take } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';
import { Message } from '../models/message';


const CHAT_URL1 = 'ws://localhost:8841//ws';
const CHAT_URL = 'ws://echo.websocket.org/';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages$: Subject<Message>;
  constructor(private websocketService: WebsocketService) {

    var uri = "ws://" + window.location.host + "/ws";


    this.messages$ = <Subject<Message>>websocketService
      .connect(uri).
      pipe(map(i => this.getMessage(i)));
  }

  getMessage(response: MessageEvent): Message {
    const backendResp = JSON.parse(response.data);
    console.log(JSON.stringify(backendResp, null, 3));

    return {
      author: backendResp.author,
      message: backendResp.message
    };
  }
}
