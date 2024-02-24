import { TestBed } from '@angular/core/testing';

import { SolicitudesAdminService } from './solicitudes-admin.service';

describe('SolicitudesAdminService', () => {
  let service: SolicitudesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
