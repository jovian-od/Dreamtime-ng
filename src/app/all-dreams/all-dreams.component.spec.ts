import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDreamsComponent } from './all-dreams.component';

describe('AllDreamsComponent', () => {
  let component: AllDreamsComponent;
  let fixture: ComponentFixture<AllDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
