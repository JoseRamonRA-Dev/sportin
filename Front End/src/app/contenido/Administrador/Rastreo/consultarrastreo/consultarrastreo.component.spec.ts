import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarrastreoComponent } from './consultarrastreo.component';

describe('ConsultarrastreoComponent', () => {
  let component: ConsultarrastreoComponent;
  let fixture: ComponentFixture<ConsultarrastreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarrastreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarrastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
