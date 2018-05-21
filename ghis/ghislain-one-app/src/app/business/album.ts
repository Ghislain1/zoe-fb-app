import {Injectable, OnInit} from '@angular/core';
import { Artist } from './artist';
import { Track } from './Track';

declare var $:any;

@Injectable()
export class Album {
    Id:number = 0;
    ArtistId:number = 0;
    Title:string = null;
    Description:string = null;
    Year:number = 0;
    ImageUrl:string = null;
    AmazonUrl:string = null;
    SpotifyUrl:string = null;

    Artist:Artist = new Artist();
    Tracks:Track[] = [];
}

 

 