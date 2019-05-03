import { TestBed } from '@angular/core/testing';

import { SuperShopService } from './super-shop.service';

describe('SuperShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperShopService = TestBed.get(SuperShopService);
    expect(service).toBeTruthy();
  });
});
