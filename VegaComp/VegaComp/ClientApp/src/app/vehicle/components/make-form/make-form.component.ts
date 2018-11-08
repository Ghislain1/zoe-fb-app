import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MakeService } from '../../services/make.service';
import { SaveMake } from '../../../shared/models/vehicle';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.css']
})
export class MakeFormComponent implements OnInit {
  models: any[];

  make: SaveMake = {
    id: 0,
    name,
    isAfricaManufactured: false,

  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private makeService: MakeService,
    // private toastyService: ToastyService
  ) {

    route.params.subscribe(p => {
      this.make.id = +p['id'] || 0;
    });
  }

  async ngOnInit() {

    var res = await this.makeService.getMakes();

    res.subscribe(i => console.log(JSON.stringify(i, null, 3)));

    console.log(this.make);
  }

  private populatemakes() {
    // var selectedmake = this.makes.find(m => m.id == this.make.makeId);
    // this.makes = selectedMake ? selectedMake.makes : [];
  }



  submit() {
    var result$ = (this.make.id) ? this.makeService.update(this.make) : this.makeService.create(this.make);
    result$.subscribe(make => {
      // this.toastyService.success({
      //   title: 'Success',
      //   msg: 'Data was sucessfully saved.',
      //   theme: 'bootstrap',
      //   showClose: true,
      //   timeout: 5000
      // });
      this.router.navigate(['/makes/', make.id])
    });
  }
}