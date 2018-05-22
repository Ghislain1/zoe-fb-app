import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'app-layout-footer',
    templateUrl: './layout-footer.component.html',
    styleUrls: ['./layout-footer.component.css']
})
export class LayoutFooterComponent implements OnInit {


    ngOnInit() {
        console.log("************ LayoutFooterComponent  init() ");
    }

}