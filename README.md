How to communicate local communication within docker. Setting up project locally. You can check out my medium post : [Enabling local communication in Docker and setting up the project](https://medium.com/@kaant43/enabling-local-communication-in-docker-and-setting-up-the-project-5b92d12d6b7a)
#### Techs I use
 - Nodejs
 - Docker
 - Redis
 - Postgres

#### Installation of api
```bash
$ yarn install
```
### Running the api

```bash
$ yarn dev

```
#### Dockerize your application
```bash
$ docker build -t image_name . 
```
#### Run Docker compose 
```bash
$ docker compose up 
```
