import {Injectable, OnInit} from '@angular/core';
import { Album } from './album';
declare var $:any;
 

@Injectable()
export class Artist {
    Id:number = 0;
    ArtistName:string = null;
    Description:string = null;
    ImageUrl:string = null;
    AmazonUrl:string = null;
    AlbumCount:number = 0;
    Albums:Album[] = [];
}
 