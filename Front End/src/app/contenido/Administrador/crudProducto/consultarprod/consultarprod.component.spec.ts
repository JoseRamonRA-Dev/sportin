import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarprodComponent } from './consultarprod.component';

describe('ConsultarprodComponent', () => {
  let component: ConsultarprodComponent;
  let fixture: ComponentFixture<ConsultarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
