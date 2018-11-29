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
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';
var CHAT_URL1 = 'ws://localhost:8841//ws';
var CHAT_URL = 'ws://echo.websocket.org/';
var ChatService = /** @class */ (function () {
    function ChatService(websocketService) {
        var _this = this;
        this.websocketService = websocketService;
        var uri = "ws://" + window.location.host + "/ws";
        this.messages$ = websocketService
            .connect(uri).
            pipe(map(function (i) { return _this.getMessage(i); }));
    }
    ChatService.prototype.getMessage = function (response) {
        var backendResp = JSON.parse(response.data);
        console.log(JSON.stringify(backendResp, null, 3));
        return {
            author: backendResp.author,
            message: backendResp.message
        };
    };
    ChatService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [WebsocketService])
    ], ChatService);
    return ChatService;
}());
export { ChatService };
//# sourceMappingURL=chat.service.js.map
//# sourceMappingURL=chat.service.js.map