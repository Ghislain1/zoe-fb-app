import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Topology } from "../models/topology";
import { TopologyService } from "../services/topology.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TopologyEditorResolver implements Resolve<Topology> {
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