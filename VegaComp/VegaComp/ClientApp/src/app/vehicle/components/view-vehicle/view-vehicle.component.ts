import { Photo } from './../../../shared/models/photo';
import { AuthService } from './../../../shared/services/auth.service';
import { ProgressService } from './../../../shared/services/progress.service';
import { PhotoService } from './../../services/photo.service';
import { VehicleService } from './../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  vehicle: any;
  vehicleId: number;
  photos: Photo[];
  progress: any;

  constructor(
    private auth: AuthService,
    private zone: NgZone, // Why this service !! what does it ??
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private progressService: ProgressService,
    private photoService: PhotoService,
    private vehicleService: VehicleService) {

    route.params.subscribe(p => {
      this.vehicleId = +p['id'];
      if (isNaN(this.vehicleId) || this.vehicleId <= 0) {
        router.navigate(['/vehicles']);
        return;
      }
    });
  }

  ngOnInit() {
    this.photoService.getPhotos(this.vehicleId).subscribe(photos => this.photos = photos);

    this.vehicleService.getVehicle(this.vehicleId)
      .subscribe(
        v => this.vehicle = v,
        err => {
          if (err.status == 404) {
            this.router.navigate(['/vehicles']);
            return;
          }
        });
  }

  delete() {
    if (confirm("Are you sure?")) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['/vehicles']);
        });
    }
  }

  uploadPhoto() {
    this.progressService.startTracking()
      .subscribe(progress => {
        this.zone.run(() => {
          this.progress = progress;
        });
      },
        null,
        () => { this.progress = null; });

    var nativeElement: HTMLInputElement = this.fileInput.nativeElement; // TODO: represents --> <input _ngcontent-c2 id="fileInput" type="file">

    var file = nativeElement.files[0];

    nativeElement.value = ''; // why???
    this.photoService.upload(this.vehicleId, file)
      .subscribe(photo => {
        this.photos.push(photo as Photo);
      },
        err => {
          this.toastrService.error('Error', err.text());
        });
  }
}