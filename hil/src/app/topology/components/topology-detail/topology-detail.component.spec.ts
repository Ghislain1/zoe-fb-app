import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyDetailComponent } from './topology-detail.component';

describe('TopologyDetailComponent', () => {
  let component: TopologyDetailComponent;
  let fixture: ComponentFixture<TopologyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
