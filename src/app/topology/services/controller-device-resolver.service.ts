import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Topology } from '../../core/models/topology';
import { TopologyService } from '../../core/services/topology.service';
import { DeviceService } from '../../core/services/device.service';
import { Controller } from '../../core/models/bs/controller';

//// Helper class or service to find a device with the giveb systemTag

@Injectable()
export class ControllerDeviceResolver implements Resolve<Controller> {


  constructor(private deviceService: DeviceService, private router: Router) {

  }

  ///return the found controller as observable.
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Controller> {

    //Get the systemTag of the  controller or Master first...
    let systemTag = route.paramMap.get('systemTag');


    return this.deviceService.getDeviceBySystemTag(systemTag).take(1).map(masterD => {
      if (masterD) {
        return masterD;
      }
      else { // systemTag not found
        alert("PageNotFoundComponent --> " + systemTag);
        this.router.navigate(['/ControllerDeviceResolver']);
        return null;
      }
    });
  }
}