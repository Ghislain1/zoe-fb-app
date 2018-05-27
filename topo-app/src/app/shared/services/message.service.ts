import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        let counter = this.messages.length;
        counter++;


        this.messages.push("Nr." + counter + " " + message);
    }

    clear() {
        this.messages = [];
    }
}
