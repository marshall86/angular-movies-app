# AngularMoviesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

Used technologies:

- Angular
- Angular Material 9.2.4
- RxJS 6.5.4
- typescript 3.8.3
- Sass (SCSS)

Running npm start to lunch the project in a dev server without showing info in the console with live reloading enabled and auto browser open on `http://localhost:4200/`

The project consists in a responsive Angular Movies web application.
The template include:

- a toolbar always available through all the website;
- a section with a search box;
- a tab bar with the movies genres;
- a list of movies;

For each movie is available a details page.
By clicking on a genre the routerLink will change the current path. The tab click activate the slide animation and will show the filtered movies list.
If we reload the page the movies list will be automatically filtered by the selected genre, by default we show all the available movies.

The code is linted and some basic unit tests are available.

## Code Lint

Run npm run lint to lint the code.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
