import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { DataService } from 'src/app/services/data/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMoviesService } from 'src/app/services/interfaces/movies/Imovies';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/list/item/item.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const fakeActivatedRoute = {
    snapshot: { params: { key: '' } },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), MaterialDesignModule],
      declarations: [
        ToolbarComponent,
        ListComponent,
        ItemComponent,
        MovieComponent,
      ],
      providers: [
        DataService,
        HttpClient,
        HttpHandler,
        { useClass: MoviesService, provide: IMoviesService },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
