import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaruserComponent } from './actualizaruser.component';

describe('ActualizaruserComponent', () => {
  let component: ActualizaruserComponent;
  let fixture: ComponentFixture<ActualizaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
