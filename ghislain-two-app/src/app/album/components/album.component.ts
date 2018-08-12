import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'

})
export class AlbumComponent {
  constructor(private albumService: AlbumService) {
    alert('AlbumComponent  kommin');
  }

  public onSubmit(values: Object): void {


  }

}
