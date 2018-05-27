import { Component } from '@angular/core';
import { ConfigService } from './shared/services/config-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private configService: ConfigService) {
        let le = this.configService.configuration;
    }
    title = 'Topology Editor for ComStudio';
}
