import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home-description',
    templateUrl: './home-description.component.html',
    styleUrls: ['./home-description.component.css']
})
export class HomeDescriptionComponent implements OnInit {

    myTemplate: any = "";
    myExternalPageLink:string;
    constructor(private httpClient: HttpClient) {
     
     }

    ngOnInit() {
        this.myExternalPageLink="./assets/statics/overview.html";
         this. httpClient.get(this.myExternalPageLink).map((html:any) => this.myTemplate = html).subscribe(ii=> 
            {
                 
            },err=>{
               // alert(err.message);   
            });
    }

}