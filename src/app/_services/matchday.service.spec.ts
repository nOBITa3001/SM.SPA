/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchdayService } from './matchday.service';

describe('Service: Matchday', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchdayService]
    });
  });

  it('should ...', inject([MatchdayService], (service: MatchdayService) => {
    expect(service).toBeTruthy();
  }));
});