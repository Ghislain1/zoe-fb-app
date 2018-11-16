import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http/';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private uploadProgress: Subject<any>;

  startTracking() {
    this.uploadProgress = new Subject();
    return this.uploadProgress;
  }

  notify(progress) {
    if (this.uploadProgress)
      this.uploadProgress.next(progress);
  }

  endTracking() {
    if (this.uploadProgress)
      this.uploadProgress.complete();
  }
}

//what does this class  BrowserXhr??? TODO

@Injectable()
export class BrowserXhrWithProgress extends BrowserXhr {

  constructor(private service: ProgressService) { super(); }

  //TODO: can you explain  XMLHttpRequest--> see lection 127
  build(): XMLHttpRequest {
    var xhr: XMLHttpRequest = super.build();

    xhr.upload.onprogress = (event) => {
      this.service.notify(this.createProgress(event));
    };

    xhr.upload.onloadend = () => {
      this.service.endTracking();
    }

    return xhr;
  }

  private createProgress(event) {
    return {
      total: event.total,
      percentage: Math.round(event.loaded / event.total * 100)
    };
  }
}