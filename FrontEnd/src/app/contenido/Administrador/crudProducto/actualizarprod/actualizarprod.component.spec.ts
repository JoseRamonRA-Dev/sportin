import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarprodComponent } from './actualizarprod.component';

describe('ActualizarprodComponent', () => {
  let component: ActualizarprodComponent;
  let fixture: ComponentFixture<ActualizarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
