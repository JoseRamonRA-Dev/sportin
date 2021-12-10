import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Membresia2Component } from './membresia2.component';

describe('Membresia2Component', () => {
  let component: Membresia2Component;
  let fixture: ComponentFixture<Membresia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Membresia2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Membresia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
