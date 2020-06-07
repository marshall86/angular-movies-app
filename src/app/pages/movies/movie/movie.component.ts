import { Component, OnInit } from '@angular/core';
import {
  Movie,
  IMoviesService,
} from 'src/app/services/interfaces/movies/Imovies';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Observable<Movie>;

  constructor(
    private moviesService: IMoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movie = this.moviesService.getMovieByKey(
      this.route.snapshot.params['key']
    );
  }
}
