

import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-layout-main',
    templateUrl: './layout-main.component.html',
    styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent implements OnInit {


    ngOnInit() {
        console.log("************ LayoutMainComponent  init() ");
    }

}