import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ClassicUrlGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url = decodeURIComponent(state.url);
    const hash = url.substr(url.indexOf('#') + 1);
    const action = hash.split('|').shift();

    switch (action) {
      case 'search':

        // const q = hash.split('|')?.pop().replace(/"/g, '');
        this.router.navigate(['/search'], { queryParams: { q: 'q' }, replaceUrl: true });
        break;
      case 'artifactdetails':
        // old format #artifactdetails|{groupId}|{artifactId}|{version}|{packaging}
        // new format        /artifact/{groupId}/{artifactId}/{version}/{packaging}
        this.router.navigate(['/artifact/' + this.getParamsAsPath(hash)], { replaceUrl: true });
        break;
    }

    return true;
  }

  private getParamsAsPath(hash: String) {
    // split on pipe and remove 'artifactdetails'
    const pathParams = hash.split('|');
    pathParams.shift();

    // if we only have groupId, artifactId, version we will default to jar packaging
    if (pathParams.length === 3) {
      pathParams.push('jar');
    } else if (pathParams.length === 4 && (!pathParams[3] || !pathParams[3].trim().length)) {
      pathParams[3] = 'jar';
    }

    return pathParams.join('/');
  }
}
