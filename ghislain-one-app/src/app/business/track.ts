import {Injectable, OnInit} from '@angular/core';
declare var $:any;
 

@Injectable()
export class Track {
    Id:number = 0;
    AlbumId:number = 0;
    SongName:string = null;
    Length:string = null;
    Bytes:number = 0;
    UnitPrice:number = 0;
}
 