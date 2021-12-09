import { TestBed } from '@angular/core/testing';

import { CrudproductoService } from './crudproducto.service';

describe('CrudproductoService', () => {
  let service: CrudproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
