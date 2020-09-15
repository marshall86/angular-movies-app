import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../interfaces/movies/Imovies';
import { DataService } from '../data/data.service';
import { GenreType } from 'src/app/models/movie.model';
import { Observable } from 'rxjs/internal/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  getMoviesList(): Observable<Movie[]> {
    return this.dataService.getData('movies.json').pipe(
      catchError((err) => this.handleError(err)),
      map((movies: Movie[]) =>
        movies.map((m: Movie) => ({
          ...m,
          description: m.description.substr(0, 80) + '...',
        }))
      )
    );
  }

  getMovieByKey(key: string): Observable<Movie> {
    return this.dataService.getData('movies.json').pipe(
      catchError((err) => this.handleError(err)),
      map((movies: Movie[]) => movies.find((m: Movie) => m.key === key)),
      map((m: Movie) => ({
        ...m,
        url: this.sanitizer.bypassSecurityTrustResourceUrl(m.video),
      }))
    );
  }

  GetMoviesByGenre(genre: GenreType): Observable<Movie[]> {
    return this.dataService.getData('movies.json').pipe(
      catchError((err) => this.handleError(err)),
      map((movies: Movie[]) =>
        movies
          .filter((m: Movie) => m.genres.includes(genre.toLowerCase()))
          .map((m: Movie) => ({
            ...m,
            description: m.description.substr(0, 80) + '...',
          }))
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
