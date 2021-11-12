import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaruserComponent } from './consultaruser.component';

describe('ConsultaruserComponent', () => {
  let component: ConsultaruserComponent;
  let fixture: ComponentFixture<ConsultaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
