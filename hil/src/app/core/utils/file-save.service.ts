import { Injectable } from "@angular/core";
import { HandleError, HttpErrorHandler } from "../services/http-error-handler.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';


/*Step 1: Install FileSaver.js dependency ---> npm install --save file-saver
 
 Step: 2: Implement file save functionality in frontend;
 
*/

@Injectable()
export class FileSaveService {
    private handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('FileSaveService');
    }


    saveFile() {
        const headers = new HttpHeaders();
        headers.append('Accept', 'text/plain');
        this.httpClient.get('/api/files', { headers: headers })
            .toPromise()
            .then(response => this.saveToFileSystem(response));
    }

    private saveToFileSystem(response) {
        const contentDispositionHeader: string = response.headers.get('Content-Disposition');
        const parts: string[] = contentDispositionHeader.split(';');
        const filename = parts[1].split('=')[1];
        const blob = new Blob([response._body], { type: 'text/plain' });
        // saveAs(blob, filename);
    }
}