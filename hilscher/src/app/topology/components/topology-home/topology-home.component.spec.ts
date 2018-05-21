import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyHomeComponent } from './topology-home.component';

describe('TopologyHomeComponent', () => {
  let component: TopologyHomeComponent;
  let fixture: ComponentFixture<TopologyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
