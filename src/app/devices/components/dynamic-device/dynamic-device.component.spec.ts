import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDeviceComponent } from './dynamic-device.component';

describe('DynamicDeviceComponent', () => {
  let component: DynamicDeviceComponent;
  let fixture: ComponentFixture<DynamicDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
