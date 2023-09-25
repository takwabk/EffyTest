import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { personalnfoGuard } from './personalnfo.guard';

describe('personalnfoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => personalnfoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
