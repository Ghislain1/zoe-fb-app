import { Component, OnInit } from '@angular/core';
import { AppConfigurationService } from 'src/app/shared/services/app-configuration.service';
import { PackageService } from 'src/app/shared/services/package.service';
import { RootObject, Datum } from 'src/app/home/Models/package';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  list: Datum[] = [];


  constructor(
    private packageService: PackageService
  ) {
  }

  ngOnInit() {
    this.packageService.GetPackges().subscribe(packageResult => this.initPackage(packageResult),
      error => this.handlerError(error));
  }

  private handlerError(error: any): void {

    // @Ghislain: todo notify or log ??
    throw new Error('Method not implemented.');
  }


  private initPackage(packageResult: RootObject): void {
    if (packageResult.data !== undefined) {
      packageResult.data.forEach(pkg => this.list.push(pkg));



    }


  }

}
