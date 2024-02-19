import { TestBed } from '@angular/core/testing';

import { SolicitudesEmpeadoService } from './solicitudes-empeado.service';

describe('SolicitudesEmpeadoService', () => {
  let service: SolicitudesEmpeadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesEmpeadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
