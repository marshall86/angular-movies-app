import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { DataService } from '../data/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
