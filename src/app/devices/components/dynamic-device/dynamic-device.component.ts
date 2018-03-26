import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../models/control-base';


@Component({
  selector: 'app-dynamic-device',
  templateUrl: './dynamic-device.component.html',
  styleUrls: ['./dynamic-device.component.css']
})
export class DynamicDeviceComponent implements OnInit {


  @Input() device: ControlBase<any>;



  //TOD: How tu sue get ??
  get isValid() {
    return true;
  }



  constructor() { }

  ngOnInit() {
  }

}
