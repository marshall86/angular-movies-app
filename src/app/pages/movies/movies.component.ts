import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Movie,
  IMoviesService,
} from 'src/app/services/interfaces/movies/Imovies';
import { GenreType } from 'src/app/models/movie.model';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { debounceTime, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  search = '';
  selectedTab = 0;
  selectedGenre = 'all';
  genres = GenreType;
  movies: Observable<Movie[]>;
  destroyed$ = new Subject();
  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    private moviesService: IMoviesService,
    private route: ActivatedRoute
  ) {
    if (this.route.snapshot.params['genre']) {
      this.selectedGenre = this.route.snapshot.params['genre'];

      Object.values(this.genres).filter((m, i) => {
        if (m === this.selectedGenre) {
          this.selectedTab = i;
        }
      });
    }
  }

  ngOnInit() {
    this.changeGenre(this.selectedGenre, this.selectedTab);

    this.modelChanged
      .pipe(debounceTime(400), takeUntil(this.destroyed$))
      .subscribe((model) => {
        if (!model) {
          this.getMovies();
          return;
        }

        this.movies = this.movies.pipe(
          map((movies: Movie[]) =>
            movies
              .filter(
                (m: Movie) =>
                  m.name.toLowerCase().includes(model.toLowerCase()) ||
                  m.description.toLowerCase().includes(model.toLowerCase())
              )
              .map((m: Movie) => ({
                ...m,
                description: m.description.substr(0, 80) + '...',
              }))
          )
        );
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.unsubscribe();
  }

  getMovies() {
    this.movies = this.moviesService.getMoviesList();
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  changeGenre(genre: string, tabIndex: number) {
    this.selectedTab = tabIndex;

    if (genre === 'all') {
      this.getMovies();
    } else {
      this.movies = this.moviesService.GetMoviesByGenre(genre);
    }
  }

  keepOrder = (a: any) => a;
}
