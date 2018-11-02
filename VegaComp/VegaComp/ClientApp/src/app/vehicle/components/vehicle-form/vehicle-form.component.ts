
import { Component, OnInit } from '@angular/core';
import { MakeService } from '../../services/make.service';
import { SaveVehicle } from '../../../shared/models/vehicle';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];

  models: any = {};
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
  constructor(private makeService: MakeService, private featureService: FeatureService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log(JSON.stringify(this.makes, null, 4));
    })

    //Use this service to get data from a server
    this.featureService.getFeatures().subscribe(features => this.features = features);
  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    console.log(JSON.stringify(selectedMake, null, 4));
    this.models = selectedMake ? selectedMake.Models : [];
  }

}
