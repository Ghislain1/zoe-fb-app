//import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-layout-navi',
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


    ngOnInit() {
        console.log("************ LayoutNaviComponent  init() ");
    }

}