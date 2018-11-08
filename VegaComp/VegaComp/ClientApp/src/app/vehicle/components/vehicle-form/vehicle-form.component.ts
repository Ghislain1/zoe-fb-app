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
    private modelService: ModelService,
    private vehicleService: VehicleService,

    private featureService: FeatureService) { }

  async  ngOnInit() {

    //make list
    const makeList$ = await this.makeService.getMakes();
    //model list
    const modelList$ = await this.modelService.getModels();
    //ferature list
    const featureList$ = await this.featureService.getFeatures();
    //vehicles list
    const vehicleList$ = await this.vehicleService.getVehicles("");

    makeList$.subscribe(makes => this.makes = makes);
    modelList$.subscribe(models => this.models = models);
    featureList$.subscribe(features => this.features = features);

    //TODO--> why? not --> vehicleList$.subscribe(vehicles => this.vehicles = vehicles);




  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    console.log(JSON.stringify(selectedMake, null, 4));
    this.models = selectedMake ? selectedMake.Models : [];
  }

}
