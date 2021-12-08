import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDirComponent } from './insertar-dir.component';

describe('InsertarDirComponent', () => {
  let component: InsertarDirComponent;
  let fixture: ComponentFixture<InsertarDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
