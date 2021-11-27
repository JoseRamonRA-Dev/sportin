import { TestBed } from '@angular/core/testing';

import { CrudproveedorService } from './crudproveedor.service';

describe('CrudproveedorService', () => {
  let service: CrudproveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudproveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
