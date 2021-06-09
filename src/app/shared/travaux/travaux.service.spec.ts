/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TravauxService } from './travaux.service';

describe('Service: Travaux', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravauxService]
    });
  });

  it('should ...', inject([TravauxService], (service: TravauxService) => {
    expect(service).toBeTruthy();
  }));
});
