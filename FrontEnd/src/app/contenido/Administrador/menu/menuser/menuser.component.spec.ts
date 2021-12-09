import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuserComponent } from './menuser.component';

describe('MenuserComponent', () => {
  let component: MenuserComponent;
  let fixture: ComponentFixture<MenuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
