# Magna SaaS replicate

## Initialize Project

1. Install dependencies `yarn`
2. Run docker container `docker-compose up`
3. Run `cp .env.example .env` to create your .env file
4. To migrate the database and sync GraphQL schema run `yarn sync`
5. To seed the database with the initial data run `yarn db:seed`

## Create new Migration with Prisma
Any prisma file changes will require to run migration to generate SQL migration.

1. After changes run `yarn db:migrate`
2. To apply migration run `yarn db:up`
3. Finally execute `yarn db:generate-prisma` to generate GraphQL types based on Prisma schema.

## Running unit tests

To run unit tests use `yarn test`
