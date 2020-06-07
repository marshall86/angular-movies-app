import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IMoviesService } from '../../services/interfaces/movies/Imovies';
import { MoviesService } from '../../services/movies/movies.service';
import { MoviesComponent } from './movies.component';
import { MaterialDesignModule } from '../../modules/material-design/material-design.module';
import { DataService } from '../../services/data/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/list/item/item.component';
import { MovieComponent } from './movie/movie.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  const fakeActivatedRoute = {
    snapshot: { params: { key: '' } },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormsModule, MaterialDesignModule],
      declarations: [
        ToolbarComponent,
        ListComponent,
        ItemComponent,
        MovieComponent,
        MoviesComponent,
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
    fixture = TestBed.createComponent(MoviesComponent);
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
