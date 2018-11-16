import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from './../../../shared/models/vehicle';
import { VehicleService } from './../../services/vehicle.service';


import { Component, OnInit } from '@angular/core';
import { MakeService } from '../../services/make.service';
import { SaveVehicle } from '../../../shared/models/vehicle';
import { FeatureService } from '../../services/feature.service';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };
  constructor(private makeService: MakeService,
    private route: ActivatedRoute,
    private router: Router,
    private modelService: ModelService,
    private vehicleService: VehicleService,
    private featureService: FeatureService,
    private toastrService: ToastrService) { }

  async  ngOnInit() {

    //make list
    const makeList$ = await this.makeService.getMakes();

    //model list
    // const modelList$ = await this.modelService.getModels(); --> DOn need why??
    //ferature list
    const featureList$ = await this.featureService.getFeatures();
    //vehicles list
    const vehicleList$ = await this.vehicleService.getVehicles("");

    makeList$.subscribe(makes => {
      this.makes = makes;
    }
    );

    //  modelList$.subscribe(models => this.models = models); -- Odn nee why?
    featureList$.subscribe(features => this.features = features);

    //TODO--> why? not --> vehicleList$.subscribe(vehicles => this.vehicles = vehicles);
    if (this.vehicle.id) {
      let vehicul: any;
      this.vehicleService.getVehicle(this.vehicle.id).subscribe(v => vehicul = v);
      this.setVehicle(vehicul);

      // Providing all  models from the selected Make e.g BMW--> x1,x2,x3...
      this.populateModels();


    }

  }

  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    console.log(JSON.stringify(selectedMake, null, 4));
    this.models = selectedMake ? selectedMake.models : [];
    console.log('-------------Models ared ');
    console.log(JSON.stringify(this.models, null, 4));
  }


  private setVehicle(v: Vehicle) {
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = v.features.map(f => f.id); //TODO: I don te understand this with pipe)();
  }


  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }


  onMakeChange() {
    this.populateModels();
    delete this.vehicle.modelId; //TODO: Syntax new ???


  }

  submit() {
    var result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle);
    result$.subscribe(vehicle => {
      this.toastrService.success('Success', 'Data was sucessfully saved.');

      this.router.navigate(['/vehicles/', vehicle.id])
    });
  }


}
