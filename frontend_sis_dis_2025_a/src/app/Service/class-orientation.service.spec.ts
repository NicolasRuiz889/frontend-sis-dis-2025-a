import { TestBed } from '@angular/core/testing';

import { ClassOrientationService } from './class-orientation.service';

describe('ClassOrientationService', () => {
  let service: ClassOrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassOrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
