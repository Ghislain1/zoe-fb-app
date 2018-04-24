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


  logFancy(ojb: any): void {
    const js = JSON.stringify(ojb, null, 3);
    console.log(js);
  }



  showAlert(ojb: any): void {
    const js = JSON.stringify(ojb, null, 3);
    alert(js);
  }
  stringify(ojb: any): string {
    return JSON.stringify(ojb, null, 3);

  }


}
