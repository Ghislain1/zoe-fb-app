import { Component } from '@angular/core';
 



@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    providers: []
})
export class UploaderComponent {
    message: string;

    constructor() { }

    onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        
    }
}