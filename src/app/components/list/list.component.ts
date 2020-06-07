import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/services/interfaces/movies/Imovies';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() movies: Movie[];
}
