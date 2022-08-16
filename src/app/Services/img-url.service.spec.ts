import { TestBed } from '@angular/core/testing';

import { ImgURLService } from './img-url.service';

describe('ImgURLService', () => {
  let service: ImgURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
