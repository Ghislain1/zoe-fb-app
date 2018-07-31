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


@Injectable()
export class TopologyWorkerResolver implements Resolve<Topology> {
  constructor(private topologyService: TopologyService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topology> {
    let systemTag = route.paramMap.get('systemTag');

    return this.topologyService.getTopologyBySystemTag(systemTag).take(1).map(topo => {
      if (topo) {
        return topo;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}