import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../core/services/config-service';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../core/models/config';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config$: Observable<Config>;
  config: Config;
  listUrl: string[] = [];

  constructor(private configService: ConfigService) {

  }

  ngOnInit() {
    this.config$ = this.configService.getConfig_2();
    this.getConfig();
  }

  //Get or extrat config from observable
  getConfig() {
    this.config$.subscribe(data => {
      this.config = data;
      this.listUrl.push(this.config.nodeUrl);
      this.listUrl.push(this.config.nodeUrl);
      this.listUrl.push(this.config.nodeUrl);
    });
  }

}
