import { TestBed } from '@angular/core/testing';

import { AgendaExportService } from './agenda-export.service';

describe('AgendaExportService', () => {
  let service: AgendaExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
