import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasquetComponent } from './basquet.component';

describe('BasquetComponent', () => {
  let component: BasquetComponent;
  let fixture: ComponentFixture<BasquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
