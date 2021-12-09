import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaruserComponent } from './insertaruser.component';

describe('InsertaruserComponent', () => {
  let component: InsertaruserComponent;
  let fixture: ComponentFixture<InsertaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
