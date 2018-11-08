import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  iList: any[] = [];


  constructor(private toastyService: ToastrService) {

    for (let index = 0; index < 10; index++) {
      this.iList.push(index + 1);
    }
    console.log(this.iList, null, 2);
  }

  showT(): void {
    this.toastyService.success('Home Iniita', 'Initializing');
  }


}
