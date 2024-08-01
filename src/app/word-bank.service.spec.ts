import { TestBed } from '@angular/core/testing';

import { WordBankService } from './word-bank.service';

describe('WordBankService', () => {
  let service: WordBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
