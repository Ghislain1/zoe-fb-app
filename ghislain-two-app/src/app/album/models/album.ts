import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class Album {
  Id = 0;
  ArtistId = 0;
  Title: string = null;
  Description: string = null;
  Year = 0;
  ImageUrl: string = null;
  AmazonUrl: string = null;
  SpotifyUrl: string = null;

  Artist: Artist = new Artist();
  Tracks: Track[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class Artist {
  Id = 0;
  ArtistName: string = null;
  Description: string = null;
  ImageUrl: string = null;
  AmazonUrl: string = null;
  AlbumCount = 0;
  Albums: Album[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class ArtistResult {
  Artist: Artist = null;
  Albums: Album[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class Track {
  Id = 0;
  AlbumId = 0;
  SongName = null;
  Length = null;
  Bytes = 0;
  UnitPrice = 0;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationStats {
  OsPlatform: string = null;
  AngularVersion = 'Unknown';
  AspDotnetVersion = 'Unknown';
  DataMode = 'Unknown';
}
