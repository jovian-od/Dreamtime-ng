import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamformComponent } from './dreamform.component';

describe('DreamformComponent', () => {
  let component: DreamformComponent;
  let fixture: ComponentFixture<DreamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
