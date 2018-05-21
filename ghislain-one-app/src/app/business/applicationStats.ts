import {Injectable, OnInit} from '@angular/core';
declare var $:any;
 
@Injectable()
export class ApplicationStats {
    OsPlatform:string = null;
    AngularVersion = "Unknown"; 
    AspDotnetVersion = "Unknown";  

}