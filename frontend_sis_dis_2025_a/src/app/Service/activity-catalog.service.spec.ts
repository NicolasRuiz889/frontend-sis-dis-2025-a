import { TestBed } from '@angular/core/testing';

import { ActivityCatalogService } from './activity-catalog.service';

describe('ActivityCatalogService', () => {
  let service: ActivityCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
