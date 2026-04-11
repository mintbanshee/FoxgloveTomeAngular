import { TestBed } from '@angular/core/testing';

import { Entries } from './entries';

describe('Entries', () => {
  let service: Entries;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Entries);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
