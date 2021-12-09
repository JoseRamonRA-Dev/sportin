import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDirsComponent } from './mostrar-dirs.component';

describe('MostrarDirsComponent', () => {
  let component: MostrarDirsComponent;
  let fixture: ComponentFixture<MostrarDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
