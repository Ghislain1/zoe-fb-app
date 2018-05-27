import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        let counter = this.messages.length;
        let date = new Date().toLocaleString();
        counter++;

        this.messages.push(date + " Nr." + counter + " " + message);

    }

    clear() {
        this.messages = [];
    }
}
