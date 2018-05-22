import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledreamComponent } from './singledream.component';

describe('SingledreamComponent', () => {
  let component: SingledreamComponent;
  let fixture: ComponentFixture<SingledreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
