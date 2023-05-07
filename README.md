# Plaforming

A simple 2d platforming engine built in [TypeScript](https://www.typescriptlang.org/).

## Prerequisites

* A machine running Linux or OSX (Windows should be supported via WSL 2 but has not been tested).
* A recent version of [GNU Make](https://www.gnu.org/software/make/).
* A recent version of [Node.js](https://nodejs.org/en).
* A recent version of [Docker](https://www.docker.com/).

## Quick Start

You can get up and running quickly with...

```
make dev
```

Then open http://localhost:8080 in your browser.

You can also package the application into a docker container...

```
docker build -t typescript-web-application:local .
docker run -p 8080:80 typescript-web-application:local
```

And again, then open http://localhost:8080 in your browser.

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).
