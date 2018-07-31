import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-layout-navi',
    templateUrl: './layout-navi.component.html',
    styleUrls: ['./layout-navi.component.css']
})
export class LayoutNaviComponent implements OnInit {


    ngOnInit() {
        console.log("************ LayoutNaviComponent  init() ");
    }

}