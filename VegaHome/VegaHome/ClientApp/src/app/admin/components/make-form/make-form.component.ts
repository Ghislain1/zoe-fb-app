import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.css']
})
export class MakeFormComponent implements OnInit {

  categories$;
  make = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService) {


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.vehicleService.getVehicle(this.id).subscribe(p => this.make = p);
    }
  }

  save(make) {
    if (this.id) {
      this.vehicleService.update(make);
    } else {
      this.vehicleService.create(make);
    }

    this.router.navigate(['/admin/dashboard']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this make?')) {
      return;
    }

    this.vehicleService.delete(this.id);
    this.router.navigate(['/admin/makes']);
  }

  ngOnInit() {
  }

}
