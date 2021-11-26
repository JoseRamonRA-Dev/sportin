import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarrastreoComponent } from './actualizarrastreo.component';

describe('ActualizarrastreoComponent', () => {
  let component: ActualizarrastreoComponent;
  let fixture: ComponentFixture<ActualizarrastreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarrastreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarrastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
