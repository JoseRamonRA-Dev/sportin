import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprodComponent } from './menuprod.component';

describe('MenuprodComponent', () => {
  let component: MenuprodComponent;
  let fixture: ComponentFixture<MenuprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
