import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Controller } from '../../../core/models/bs/controller';
import { DeviceService } from '../../../core/services/device.service';


@Component({
  selector: 'app-devices-root',
  templateUrl: './devices-root.component.html',
  styleUrls: ['./devices-root.component.css']
})
export class DevicesRootComponent implements OnInit {
  devices$: Observable<Controller[]>;

  devices: Controller[];

  constructor(private deviceService: DeviceService) {

    this.devices$ = deviceService.getDevices();

  }

  ngOnInit() {
    this.getDevices();
  }



  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe(devices => {

        devices.forEach(element => {
          console.log(JSON.stringify(element));
        });

        this.devices = devices
      });
  }

}
