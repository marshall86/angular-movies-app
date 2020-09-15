import { Component, Input, AfterContentInit } from '@angular/core';
import { Movie } from 'src/app/services/interfaces/movies/Imovies';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() movie: Movie;
  @Input() movieDetails: boolean;
}
