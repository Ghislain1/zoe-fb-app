import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {


    ngOnInit() {
        console.log("************ LayoutHeaderComponent  init() ");
    }

}