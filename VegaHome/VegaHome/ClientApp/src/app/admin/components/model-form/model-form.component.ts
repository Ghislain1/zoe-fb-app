import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  makes$;
  modelM: any = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService) {


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.vehicleService.getVehicle(this.id).subscribe(p => this.modelM = p);
    }
  }

  save(modelM) {

    if (this.id) {
      this.vehicleService.update(modelM);
    } else {
      this.modelM.MakeId = 3;
      this.vehicleService.createModelVehicle(modelM).subscribe(ii => ii, eerr => {
        alert(this.modelM.MakeId);
      });
    }

    // this.router.navigate(['admin/dashbord']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this modelM?')) {
      return;
    }

    this.vehicleService.delete(this.id);
    this.router.navigate(['/admin/modelMs']);
  }

  ngOnInit() {
    this.makes$ = this.vehicleService.getMakes();
  }

}
