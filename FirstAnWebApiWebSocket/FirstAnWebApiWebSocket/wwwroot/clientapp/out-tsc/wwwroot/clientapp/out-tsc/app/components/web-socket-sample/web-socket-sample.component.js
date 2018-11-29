var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
// https://github.com/aspnet/Docs/tree/master/aspnetcore/fundamentals/websockets/samples/2.x/WebSocketsSample
var WebSocketSampleComponent = /** @class */ (function () {
    function WebSocketSampleComponent() {
        this.connectButton = document.getElementById("connectButton");
        this.stateLabel = 'Ready to connect...';
        this.sendMessage = document.getElementById("sendMessage");
        this.sendButton = document.getElementById("sendButton");
        this.commsLog = document.getElementById("commsLog");
        this.commsLogList = [];
        this.closeButton = document.getElementById("closeButton");
        this.scheme = document.location.protocol === "https:" ? "wss" : "ws";
        this.port = document.location.port ? (":" + document.location.port) : "";
    }
    WebSocketSampleComponent.prototype.ngOnInit = function () {
        this.connectionUrl = this.scheme + "://" + document.location.hostname + this.port + "/ws";
    };
    WebSocketSampleComponent.prototype.connect = function () {
        var ds = this;
        this.stateLabel = "Connecting...";
        this.socket = new WebSocket(this.connectionUrl);
        this.socket.onopen = function (event) {
            ds.updateState();
            var lin4 = 'Connection opened';
            ds.commsLogList.push(lin4);
        };
        this.socket.onclose = function (event) {
            ds.updateState();
            var lin3 = 'Connection closed. Code: ' + ds.htmlEscape(event.code) + '. Reason: ' + ds.htmlEscape(event.reason);
            ds.commsLogList.push(lin3);
        };
        // this.socket.onerror = this.updateState;
        this.socket.onmessage = function (event) {
            var lin2 = 'Server --> Client ' + ds.htmlEscape(event.data);
            ds.commsLogList.push(lin2);
        };
    };
    ;
    WebSocketSampleComponent.prototype.htmlEscape = function (str) {
        return str.toString()
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    WebSocketSampleComponent.prototype.close = function () {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            alert("this.socket not connected");
        }
        this.socket.close(1000, "Closing from client");
    };
    ;
    WebSocketSampleComponent.prototype.send = function () {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            alert("this.socket not connected");
        }
        var data = this.sendMessage;
        this.socket.send(data);
        var line = '<td class="commslog-client">Client</td>' +
            '<td class="commslog-server">Server</td>' +
            '<td class="commslog-data">' + this.htmlEscape(data) + '</td> ';
        var linD = 'Client --> Server ' + (data);
        this.commsLogList.push(linD);
    };
    ;
    WebSocketSampleComponent.prototype.updateState = function () {
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
        }
        else {
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
    ;
    WebSocketSampleComponent = __decorate([
        Component({
            selector: 'app-web-socket-sample',
            templateUrl: './web-socket-sample.component.html',
            styleUrls: ['./web-socket-sample.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketSampleComponent);
    return WebSocketSampleComponent;
}());
export { WebSocketSampleComponent };
//# sourceMappingURL=web-socket-sample.component.js.map
//# sourceMappingURL=web-socket-sample.component.js.map