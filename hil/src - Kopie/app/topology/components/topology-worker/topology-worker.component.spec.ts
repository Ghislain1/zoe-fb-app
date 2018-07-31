import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyWorkerComponent } from './topology-worker.component';

describe('TopologyWorkerComponent', () => {
  let component: TopologyWorkerComponent;
  let fixture: ComponentFixture<TopologyWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
