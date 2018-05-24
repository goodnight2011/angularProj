import { TestBed, inject } from '@angular/core/testing';

import { FilterTextHintsProviderService } from './filter-text-hints-provider.service';

describe('FilterTextHintsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTextHintsProviderService]
    });
  });

  it('should be created', inject([FilterTextHintsProviderService], (service: FilterTextHintsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
