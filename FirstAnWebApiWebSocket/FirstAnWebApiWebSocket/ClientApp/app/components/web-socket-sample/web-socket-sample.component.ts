import { Component, OnInit } from '@angular/core';





// https://github.com/aspnet/Docs/tree/master/aspnetcore/fundamentals/websockets/samples/2.x/WebSocketsSample

@Component({
  selector: 'app-web-socket-sample',
  templateUrl: './web-socket-sample.component.html',
  styleUrls: ['./web-socket-sample.component.css']
})
export class WebSocketSampleComponent implements OnInit {

  connectionUrl: string;


  connectButton = document.getElementById("connectButton");
  stateLabel = 'Ready to connect...';
  sendMessageDisable: boolean;
  sendMessage = document.getElementById("sendMessage");
  sendButton = document.getElementById("sendButton");
  commsLog = document.getElementById("commsLog");
  commsLogList = [];
  closeButton = document.getElementById("closeButton");
  socket;
  scheme = document.location.protocol === "https:" ? "wss" : "ws";
  port = document.location.port ? (":" + document.location.port) : "";

  constructor() {
  }

  ngOnInit() {
    this.connectionUrl = this.scheme + "://" + document.location.hostname + this.port + "/ws";
  }

  connect() {
    let ds = this;
    this.stateLabel = "Connecting...";
    this.socket = new WebSocket(this.connectionUrl);
    this.socket.onopen = (event) => {
      ds.updateState();
      const lin4 = 'Connection opened';
      ds.commsLogList.push(lin4);
    };

    this.socket.onclose = function (event) {
      ds.updateState();
      const lin3 = 'Connection closed. Code: ' + ds.htmlEscape(event.code) + '. Reason: ' + ds.htmlEscape(event.reason);
      ds.commsLogList.push(lin3);
    };


    // this.socket.onerror = this.updateState;
    this.socket.onmessage = function (event) {
      const lin2 = 'Server --> Client ' + ds.htmlEscape(event.data);
      ds.commsLogList.push(lin2);
    };
  };

  htmlEscape(str) {
    return str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  close() {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      alert("this.socket not connected");
    }
    this.socket.close(1000, "Closing from client");
  };

  send() {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      alert("this.socket not connected");
    }
    var data = this.sendMessage;
    this.socket.send(data);
    var line =
      '<td class="commslog-client">Client</td>' +
      '<td class="commslog-server">Server</td>' +
      '<td class="commslog-data">' + this.htmlEscape(data) + '</td> ';
    const linD = 'Client --> Server ' + (data);
    this.commsLogList.push(linD);
  };

  updateState(): void {
    var ds = this;
    function disable() {
      ds.sendMessageDisable = true;
      // sendMessage.disabled = true;
      // sendButton.disabled = true;
      // closeButton.disabled = true;
    }
    function enable() {
      ds.sendMessageDisable = false;
      // sendMessage.disabled = false;
      // sendButton.disabled = false;
      // closeButton.disabled = false;
    }
    // connectionUrl.disabled = true;
    // connectButton.disabled = true;
    if (!ds.socket) {
      disable();
    } else {
      switch (ds.socket.readyState) {
        case WebSocket.CLOSED:
          ds.stateLabel = "Closed";
          disable();
          // connectionUrl.disabled = false;
          // connectButton.disabled = false;
          break;
        case WebSocket.CLOSING:
          ds.stateLabel = "Closing...";
          disable();
          break;
        case WebSocket.CONNECTING:
          ds.stateLabel = "Connecting...";
          disable();
          break;
        case WebSocket.OPEN:
          ds.stateLabel = "Open";
          enable();
          break;
        default:
          ds.stateLabel = "Unknown WebSocket State: " + ds.htmlEscape(ds.socket.readyState);
          disable();
          break;
      }
    }
  };
}
