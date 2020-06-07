import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesComponent,
  },
  {
    path: 'movies/:genre',
    pathMatch: 'full',
    component: MoviesComponent,
  },
  {
    path: 'movie/:key',
    component: MovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
