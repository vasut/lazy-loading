import { TestBed, inject } from '@angular/core/testing';

import { SelectivePreloadingService } from './selective-preloading.service';

describe('SelectivePreloadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingService]
    });
  });

  it('should be created', inject([SelectivePreloadingService], (service: SelectivePreloadingService) => {
    expect(service).toBeTruthy();
  }));
});
