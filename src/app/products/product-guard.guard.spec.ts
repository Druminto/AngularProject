import { TestBed, async, inject } from '@angular/core/testing';

import { ProductGuardGuard } from './product-guard.guard';

describe('ProductGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuardGuard]
    });
  });

  it('should ...', inject([ProductGuardGuard], (guard: ProductGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
