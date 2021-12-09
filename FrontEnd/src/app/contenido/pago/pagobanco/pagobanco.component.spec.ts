import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagobancoComponent } from './pagobanco.component';

describe('PagobancoComponent', () => {
  let component: PagobancoComponent;
  let fixture: ComponentFixture<PagobancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagobancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagobancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
