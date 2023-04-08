# node-express-server

### ToDo

-   [x] -   Setup Basic Project with TypeScript
-   [x] -   Setup linting and code formating
-   [x] -   Setup Express Server
-   [x] -   Setup TypeORM
-   [x] -   Setup graceful server shutdown
-   [ ] -   Setup OpenAPI
-   [ ] -   Dockerize application

<hr>
### TypeORM CLI

##### To Create New Entity

`npm run typeorm entity:create src/database/entities/{EntityName}`

##### To Create New Migration

`npm run typeorm migration:create src/database/migrations/{MigrationName}`

##### To Generate New Migration from Entities - [Link](https://typeorm.io/using-cli#generate-a-migration-from-existing-table-schema)

`npm run typeorm migration:generate src/database/migrations/{MigrationName} -- -p -d src/database`
