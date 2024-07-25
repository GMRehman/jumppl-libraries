import { TestBed } from '@angular/core/testing';

import { JumpplLibraryService } from './jumppl-library.service';

describe('JumpplLibraryService', () => {
  let service: JumpplLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JumpplLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
