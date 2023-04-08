# node-express-server

### ToDo

✅ - Setup Basic Project with TypeScript <br>
✅ - Setup linting and code formating<br>
✅ - Setup Express Server<br>
✅ - Setup TypeORM<br>
✅ - Setup graceful server shutdown<br>
⏳ - Setup OpenAPI<br>
⏳ - Dockerize application<br>

<hr>
### TypeORM CLI

##### To Create New Entity

`npm run typeorm entity:create src/database/entities/{EntityName}`

##### To Create New Migration

`npm run typeorm migration:create src/database/migrations/{MigrationName}`

##### To Generate New Migration from Entities - [Link](https://typeorm.io/using-cli#generate-a-migration-from-existing-table-schema)

`npm run typeorm migration:generate src/database/migrations/{MigrationName} -- -p -d src/database`
