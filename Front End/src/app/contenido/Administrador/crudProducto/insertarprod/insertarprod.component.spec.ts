import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarprodComponent } from './insertarprod.component';

describe('InsertarprodComponent', () => {
  let component: InsertarprodComponent;
  let fixture: ComponentFixture<InsertarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
