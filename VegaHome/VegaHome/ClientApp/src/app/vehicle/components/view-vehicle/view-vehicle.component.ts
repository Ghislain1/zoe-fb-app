import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressService } from '../../../shared/services/progress.service';
import { PhotoService } from '../../../shared/services/photo.service';
import { VehicleService } from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  vehicle: any;
  vehicleId: number;
  photos: any[];
  progress: any;
  ghisTODO_ForAuth: Boolean = false;

  constructor(
    //  private auth: Auth,
    // private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    // private toasty: ToastyService,
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
    // this.photoService.getPhotos(this.vehicleId)
    //   .subscribe(photos => this.photos = photos);

    this.vehicleService.getVehicle(this.vehicleId)
      .subscribe(
        v => this.vehicle = v,
        err => {
          if (err.status === 404) {
            this.router.navigate(['/vehicles']);
            return;
          }
        });
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['/vehicles']);
        });
    }
  }

  uploadPhoto() {
    this.progressService.startTracking()
      .subscribe(progress => {
        // TODO: GHislain
        // this.zone.run(() => {
        //   this.progress = progress;
        // } );
      },
        null,
        () => { this.progress = null; });

    // tslint:disable-next-line:prefer-const
    let nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    const file = nativeElement.files[0];
    nativeElement.value = '';
    this.photoService.upload(this.vehicleId, file)
      .subscribe(photo => {
        this.photos.push(photo);
      },
        err => {
          // TODO
          // this.toasty.error({
          //   title: 'Error',
          //   msg: err.text(),
          //   theme: 'bootstrap',
          //   showClose: true,
          //   timeout: 5000
          // });
        });
  }
}
