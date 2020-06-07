import { GenreType } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  rate: string;
  length: string;
  img: string;
  genres: GenreType;
}

export abstract class IMoviesService {
  abstract getMoviesList(): Observable<Movie[]>;
  abstract getMovieByKey(key: string): Observable<Movie>;
  abstract GetMoviesByGenre(genre: string): Observable<Movie[]>;
}
