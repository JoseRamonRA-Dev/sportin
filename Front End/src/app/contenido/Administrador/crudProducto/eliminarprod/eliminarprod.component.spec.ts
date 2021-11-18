import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarprodComponent } from './eliminarprod.component';

describe('EliminarprodComponent', () => {
  let component: EliminarprodComponent;
  let fixture: ComponentFixture<EliminarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
