import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInfoComponent } from './todo-info.component';

describe('TodoInfoComponent', () => {
  let component: TodoInfoComponent;
  let fixture: ComponentFixture<TodoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
