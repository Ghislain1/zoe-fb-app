import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { TopologyService } from './topology.service';
import { Topology } from '../../core/models/topology';
 

@Injectable()
export class TopologyDetailResolver implements Resolve<Topology> {
  constructor(private cs: TopologyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topology> {
    let id = route.paramMap.get('id');

    return this.cs.getTopology(id).take(1).map(topo => {
      if (topo) {
        return topo;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}