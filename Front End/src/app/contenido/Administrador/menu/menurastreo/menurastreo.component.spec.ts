import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurastreoComponent } from './menurastreo.component';

describe('MenurastreoComponent', () => {
  let component: MenurastreoComponent;
  let fixture: ComponentFixture<MenurastreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenurastreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenurastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
