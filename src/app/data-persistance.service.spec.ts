import { TestBed, inject } from '@angular/core/testing';

import { DataPersistanceService } from './data-persistance.service';

describe('DataPersistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPersistanceService]
    });
  });

  it('should be created', inject([DataPersistanceService], (service: DataPersistanceService) => {
    expect(service).toBeTruthy();
  }));
});
