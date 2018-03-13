import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyListComponent } from './topology-list.component';

describe('TopologyListComponent', () => {
  let component: TopologyListComponent;
  let fixture: ComponentFixture<TopologyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
