import {Injectable, OnInit} from '@angular/core';
import { Album } from './album';
import { Artist } from './artist';
declare var $:any;

 

 

@Injectable()
export class ArtistResult {
    Artist: Artist = null;
    Albums: Album[] = [];
}
