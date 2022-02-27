import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionDashboardComponent } from './impression-dashboard.component';

describe('ImpressionDashboardComponent', () => {
  let component: ImpressionDashboardComponent;
  let fixture: ComponentFixture<ImpressionDashboardComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ImpressionDashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
