
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from '../../services/model.service';

import { MakeService } from '../../services/make.service';

import { ToastrService } from 'ngx-toastr';
import { SaveModel } from '../../../shared/models/model';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  model: SaveModel = {
    id: 0,
    name,
    makeId: 0,
    touched: false,
    valid: false
  };

  makes;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modelService: ModelService,
    private makeService: MakeService,
    private toastrService: ToastrService
  ) {

    route.params.subscribe(p => {
      this.model.id = +p['id'] || 0;
    });
  }

  async ngOnInit() {
    var res = await this.makeService.getMakes();

    console.log('Makes are there');

    res.subscribe(makes => this.makes = makes)
  }



  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.model.makeId);
    alert(selectedMake);

  }

  submit() {



    var result$ = (this.model.id) ? this.modelService.update(this.model) : this.modelService.create(this.model);
    result$.subscribe(model => {
      this.toastrService.success('Hello world!', 'Toastr fun!');
      // this.toastrService.success({
      //   title: 'Success',
      //   msg: 'Data was sucessfully saved.',
      //   theme: 'bootstrap',
      //   showClose: true,
      //   timeout: 5000
      // });

      // this.router.navigate(['/models/', model.id])
      this.router.navigate(['']);
    });
  }
}