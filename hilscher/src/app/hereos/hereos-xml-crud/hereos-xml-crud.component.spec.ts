import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereosXmlCrudComponent } from './hereos-xml-crud.component';

describe('HereosXmlCrudComponent', () => {
  let component: HereosXmlCrudComponent;
  let fixture: ComponentFixture<HereosXmlCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereosXmlCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereosXmlCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
