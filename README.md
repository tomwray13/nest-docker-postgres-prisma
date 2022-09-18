# Docker Compose setup for NestJS + Redis + Postgres

This is a repo made for [this blog post](https://www.tomray.dev/nestjs-docker-compose-postgres) which explains the steps to setup a local dev environment for NestJS + Redis + Postgres.

This repo is ORM agnostic, and will likely require further configs tweaks to work with your ORM of choice.

You can, however, check out the [Prisma branch](https://github.com/tomwray13/nest-docker-postgres-prisma/tree/prisma-setup) of this repo to see an example Prisma setup with this workflow.

## Local setup

Here's how to setup locally.

1. Clone this repo
2. Run `npm install` to install dependencies
3. Copy the `.env.example` file over to your own `.env` file and update the variables
4. Run `docker-compose up -d` to setup local environment with Docker

This setup will handle hot reloading, so any updates you make to the NestJS code will update the container in realtime.

## Tweaking the Dockerfile

If you make any tweaks to the Dockerfile to edit the image, you'll need to run `docker-compose up -d --build` to rebuild the image
