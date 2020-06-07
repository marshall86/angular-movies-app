import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { DataService } from 'src/app/services/data/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMoviesService } from 'src/app/services/interfaces/movies/Imovies';
import { MockActivatedRouteParent } from 'mock-services/MockActivatedRouteParent';
import { of } from 'rxjs';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let mockActivatedRoute = new MockActivatedRouteParent({
    parent: new MockActivatedRouteParent({
      params: of({ id: '1' }),
    }),
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule],
      declarations: [ItemComponent],
      providers: [
        DataService,
        HttpClient,
        HttpHandler,
        { useClass: MoviesService, provide: IMoviesService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
