import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { MovieComponent } from './movie/movie.component';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMoviesService } from 'src/app/services/interfaces/movies/Imovies';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/list/item/item.component';
import { FormsModule } from '@angular/forms';

export const pagesComponent = [
  ListComponent,
  ItemComponent,
  MovieComponent,
  MoviesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    MoviesRoutingModule,
  ],
  exports: [pagesComponent],
  declarations: [pagesComponent],
  providers: [{ useClass: MoviesService, provide: IMoviesService }],
})
export class MoviesModule {}
