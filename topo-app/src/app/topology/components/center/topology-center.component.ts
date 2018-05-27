

import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../shared/services/logging.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../../shared/Config';
import { MessageService } from '../../../shared/services/message.service';


@Component({
    selector: 'app-topology-center',
    templateUrl: './topology-center.component.html',
    styleUrls: ['./topology-center.component.css']
})
export class TopologyCenterComponent implements OnInit {
    private configuration: Config;
    constructor(private loggingService: LoggingService, private messageService: MessageService,
        private route: ActivatedRoute) {

        this.logMessage("runs constructor");

    }

    ngOnInit() {
        this.logMessage("init starts..");

        this.route.data.subscribe((data: { config: Config }) => {

            this.logMessage(" start gets config data..");
            this.configuration = { ...data.config };
            this.logMessage("config data finished successfully.: " + this.configuration.urlApiTopo);
        });

        this.logMessage("init finished..");
    }

    /** Log a HeroService message with the MessageService */
    private logMessage(message: string) {
        this.messageService.add('TopologyService: ' + message);
    }
}


