import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  logs: string[] = [];

  clear() {
  this.logs = [];
  }

  error(error: any) {
    console.error(error); // log to console  
    this.logs.push(error);
  }
}
