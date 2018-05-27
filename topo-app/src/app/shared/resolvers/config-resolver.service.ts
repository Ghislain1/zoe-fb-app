import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { Config } from "../Config";
import { ConfigService } from "../services/config-service";

@Injectable()
export class ConfigResolver implements Resolve<Config> {
    constructor(private configService: ConfigService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Config> {
        let systemTag = route.paramMap.get('systemTag');

        return this.configService.getConfig_2().map(config => {
            if (config) {
                return config;
            } else { // id not found
                this.router.navigate(['/crisis-center']);
                return null;
            }
        });
    }
}
