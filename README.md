# Live updates with loading indicator

This is a proof of concept (PoC) to display a loading indicator when data is being fetched asynchronously and data fetches may happen multiple times. Kind of live updates but with different observables for when data needs to be fetched and the actual data fetching observable.

Takes into account server side rendering & hydration.

Created as response to an [`r/Angular2` Reddit post](https://www.reddit.com/r/Angular2/comments/1ddd1o0/can_an_observable_send_null_while_it_is_executing/)

## About

Command used to generate this project:

```shell
pnpm dlx @angular/cli new \
  --package-manager=pnpm \
  --inline-style --inline-template --style css \
  --ssr --skip-tests \
  live-updates-loading-indicator
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
