import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { AppConfigurationService } from '../services/app-configuration.service';
import { Album } from '../models/album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'

})
export class AlbumComponent implements OnInit {
  constructor(private router: Router,
    private albumService: AlbumService,
    private config: AppConfigurationService) {
  }

  albumList: Album[] = [];
  busy = true;



  ngOnInit() {
    this.getAlbums();

    this.config.isSearchAllowed = true;
    this.config.activeTab = 'albums';
    this.config.searchText = '';

    // ??? Non-DOM way to do this?
    setTimeout(() => {

    }, 200);
  }

  get filteredAlbumList() {
    if (this.config.searchText && this.config.searchText.length > 1) {
      const lsearchText = this.config.searchText.toLowerCase();
      return this.albumList.filter((a) =>
        a.Title.toLowerCase().includes(lsearchText) ||
        a.Artist.ArtistName.toLowerCase().includes(lsearchText)
      );
    }
    return this.albumList;
  }

  getAlbums() {
    this.busy = true;
    this.albumList = [];
    this.albumService.getAlbums()
      .subscribe(albums => {
        this.albumList = albums;
        this.busy = false;

        // reset scroll position of the list
        // setTimeout(() => $('#MainView').scrollTop(this.albumService.listScrollPos), 100);
      }, err => {

      });
  }

  albumClick(album: Album) {
    // this.albumService.listScrollPos = $('#MainView').scrollTop();
    this.router.navigate(['/album', album.Id]);
  }


  addAlbum() {

  }

  deleteAlbum(album: Album) {

  }
}
