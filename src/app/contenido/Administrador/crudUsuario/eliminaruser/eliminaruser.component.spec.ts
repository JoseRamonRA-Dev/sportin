import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaruserComponent } from './eliminaruser.component';

describe('EliminaruserComponent', () => {
  let component: EliminaruserComponent;
  let fixture: ComponentFixture<EliminaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
