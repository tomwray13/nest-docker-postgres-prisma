# Docker Compose setup for NestJS + Redis + Postgres (with Prisma)

This is a repo made for [this blog post](https://www.tomray.dev/nestjs-docker-compose-postgres) which explains the steps to setup a local dev environment for NestJS + Redis + Postgres.

This branch extends the [main branch](https://github.com/tomwray13/nest-docker-postgres-prisma) of this repo to use Prisma as the ORM layer for making reads/writes to the Postgres database.

## Local setup

Here's how to setup locally.

1. Clone this repo
2. Run `npm run install` to install dependencies
3. Copy the `.env.example` file over to your own `.env` file and update the variables
4. Run `docker-compose up -d` to setup local environment with Docker
5. Run `npx prisma migrate dev` to run local database migrations

This setup will handle hot reloading, so any updates you make to the NestJS code will update the container in realtime. 

## Installing new pacakages / database changes

If you install new dependencies or make any database changes, you'll need to run the following commands to ensure your docker containers also use the new depenencies: 

```bash
docker-compose down
```

And then run the command:

```bash
docker-compose up -d --build -V
```

## Tweaking the Dockerfile

If you make any tweaks to the Dockerfile to edit the image, you'll need to run `docker-compose up -d --build` to rebuild the image
