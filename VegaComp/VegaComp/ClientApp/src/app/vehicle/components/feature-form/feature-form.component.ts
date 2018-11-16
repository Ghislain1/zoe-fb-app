import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FeatureService } from '../../services/feature.service';
import { Router } from '@angular/router';
import { SaveFeature } from '../../../shared/models/feature';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css']
})
export class FeatureFormComponent implements OnInit {

  feature: SaveFeature = {
    id: 0,
    name: '',
    touched: false,
    valid: false,
  };

  constructor(
    private router: Router,
    private featureService: FeatureService,
    private toastrService: ToastrService) { }

  ngOnInit() {

  }


  submit() {
    var result$ = (this.feature.id) ? this.featureService.update(this.feature) : this.featureService.create(this.feature);
    result$.subscribe(feature => {
      this.toastrService.success('Success', 'Data was sucessfully saved.');

      this.router.navigate(['/features/', feature.id])
    });
  }


}
