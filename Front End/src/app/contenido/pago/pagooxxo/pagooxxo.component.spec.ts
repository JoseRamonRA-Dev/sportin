import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagooxxoComponent } from './pagooxxo.component';

describe('PagooxxoComponent', () => {
  let component: PagooxxoComponent;
  let fixture: ComponentFixture<PagooxxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagooxxoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagooxxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
