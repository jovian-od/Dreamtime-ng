import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalviewComponent } from './calview.component';

describe('CalviewComponent', () => {
  let component: CalviewComponent;
  let fixture: ComponentFixture<CalviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
