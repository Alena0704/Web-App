import { TestBed } from '@angular/core/testing';

import { TableDataService } from './table-data.service';

describe('SubjectDataService', () => {
  let service: TableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
