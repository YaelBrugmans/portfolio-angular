/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { WorksService } from './works.service';

describe('Service: Travaux', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorksService]
    });
  });

  it('should ...', inject([WorksService], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
