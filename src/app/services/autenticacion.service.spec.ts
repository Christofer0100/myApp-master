import { TestBed } from '@angular/core/testing';

import { autenticacion } from './autenticacion.service';

describe('autenticacion', () => {
  let service: autenticacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(autenticacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
