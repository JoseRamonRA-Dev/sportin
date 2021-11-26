import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarrastreoComponent } from './insertarrastreo.component';

describe('InsertarrastreoComponent', () => {
  let component: InsertarrastreoComponent;
  let fixture: ComponentFixture<InsertarrastreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarrastreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarrastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
