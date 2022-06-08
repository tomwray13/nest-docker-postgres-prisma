## Local setup

Here's how to setup locally.

1. Clone this repo
2. Run `npm run install` to install dependencies
3. Copy the `.env.example` file over to your own `.env` file and update the variables
4. Run `docker-compose up -d` to setup local environment with Docker
5. Run `npx prisma migrate dev` to run local database migrations

## Installing new pacakages / database changes

If you install new dependencies or make any database changes, you'll need to run the following command to ensure your docker containers also use the new depenencies: `docker-compose up -d -V`

## Tweaking the Dockerfile

If you make any tweaks to the Dockerfile to edit the image, you'll need to run `docker-compose up -d --build` to rebuild the image