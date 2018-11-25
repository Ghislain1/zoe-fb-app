var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.messageList = [];
        this.message = {
            author: "Ghis",
            message: " I love this Game !!! ",
        };
        this.chatService.messages$.subscribe(function (ok) {
            console.log(ok);
            var msg = ok.author + " says: " + ok.message + " ";
            _this.messageList.push(msg);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.sendMsg = function () {
        alert(this.message);
        this.chatService.messages$.next(this.message);
        this.message.message = '';
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [ChatService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map