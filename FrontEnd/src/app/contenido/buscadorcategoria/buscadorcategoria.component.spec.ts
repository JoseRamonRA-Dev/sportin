import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorcategoriaComponent } from './buscadorcategoria.component';

describe('BuscadorcategoriaComponent', () => {
  let component: BuscadorcategoriaComponent;
  let fixture: ComponentFixture<BuscadorcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
