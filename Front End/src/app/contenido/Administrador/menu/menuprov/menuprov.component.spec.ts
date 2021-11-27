import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprovComponent } from './menuprov.component';

describe('MenuprovComponent', () => {
  let component: MenuprovComponent;
  let fixture: ComponentFixture<MenuprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
