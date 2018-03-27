import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicesRootComponent } from '../../../devices/components/devices-root/devices-root.component';



describe('DevicesRootComponent', () => {
  let component: DevicesRootComponent;
  let fixture: ComponentFixture<DevicesRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevicesRootComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
