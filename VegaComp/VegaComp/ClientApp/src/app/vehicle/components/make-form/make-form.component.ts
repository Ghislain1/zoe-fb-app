import { Make } from './../../../shared/models/vehicle';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MakeService } from '../../services/make.service';
import { SaveMake } from '../../../shared/models/vehicle';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.css']
})
export class MakeFormComponent implements OnInit {
  make: SaveMake = {
    id: 0,
    name,
    isAfricaManufactured: true,
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private makeService: MakeService,
    private toastrService: ToastrService
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



  submit() {
    var result$ = (this.make.id) ? this.makeService.update(this.make) : this.makeService.create(this.make);
    result$.subscribe(make => {

      this.toastrService.success(make.name + ' is created succesfully! id=' + make.id, 'Creating');
      // this.router.navigate(['/makes/', make.id])
      this.router.navigate([]);
    });
  }
}