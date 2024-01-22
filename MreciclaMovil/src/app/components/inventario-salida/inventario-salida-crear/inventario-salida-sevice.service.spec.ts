import { TestBed } from '@angular/core/testing';

import { InventarioSalidaSeviceService } from './inventario-salida-sevice.service';

describe('InventarioSalidaSeviceService', () => {
  let service: InventarioSalidaSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioSalidaSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
