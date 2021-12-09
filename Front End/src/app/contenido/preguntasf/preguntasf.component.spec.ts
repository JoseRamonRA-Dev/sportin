import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasfComponent } from './preguntasf.component';

describe('PreguntasfComponent', () => {
  let component: PreguntasfComponent;
  let fixture: ComponentFixture<PreguntasfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
