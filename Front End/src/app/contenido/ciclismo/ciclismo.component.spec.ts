import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclismoComponent } from './ciclismo.component';

describe('CiclismoComponent', () => {
  let component: CiclismoComponent;
  let fixture: ComponentFixture<CiclismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
