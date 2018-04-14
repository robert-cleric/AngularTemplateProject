# AngularTemplateProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To run Angular web app in Docker container
- Go to the docker-compose file and comment/uncomment the appropriate code.
- Make sure that the appropriate ports are exposed.
```
docker build --rm -f Dockerfile -t angular-template:latest .
docker run --rm -d -p 80:443 angular-template:latest

docker stop $(docker ps -a -q --filter ancestor=angular-template)
docker rm $(docker ps -a -q --filter status=exited)
docker rmi angular-template
```

## To run Angular web app and .NET Web API
- Go to the docker-compose file and comment/uncomment the appropriate code.
- Make sure the simple-web-api image is built
```
docker-compose up -d --build
```

## To stop the Docker container
- From the terminal
```
docker-compose down


```
