import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    public imageUrl: string = "/assets/imgs/default.png"
    fileToUpload: File = null;

    constructor(public messageService: MessageService) { }

    ngOnInit() {
    }
    handleFile(file: FileList) {
        this.fileToUpload = file.item(0);

        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload)
    }

}
