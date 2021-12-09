import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDirComponent } from './actualizar-dir.component';

describe('ActualizarDirComponent', () => {
  let component: ActualizarDirComponent;
  let fixture: ComponentFixture<ActualizarDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
