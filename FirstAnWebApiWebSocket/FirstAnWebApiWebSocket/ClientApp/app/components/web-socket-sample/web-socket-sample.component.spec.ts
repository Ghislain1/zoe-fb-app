import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketSampleComponent } from './web-socket-sample.component';

describe('WebSocketSampleComponent', () => {
  let component: WebSocketSampleComponent;
  let fixture: ComponentFixture<WebSocketSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
