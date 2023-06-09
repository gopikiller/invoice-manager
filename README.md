# node-express-server

### ToDo

✅ - Setup Basic Project with TypeScript <br>
✅ - Setup linting and code formating<br>
✅ - Setup Express Server<br>
✅ - Setup TypeORM<br>
✅ - Setup graceful server shutdown<br>
✅ - Setup Logger<br>
✅ - Setup OpenAPI<br>
⏳ - Setup Testing library<br>
⏳ - Dockerize application<br>

<hr>

### How to start the application

Step 1: Run Postgres database container in docker
`sh postgres.sh`

Step 2: Start a development server
`npm run dev`

Step 3: Check the swagger API docs
`http://localhost:3000/api-docs/`

![screenshots-1](screenshots/swagger-ui.png)

### DB Diagram
![screenshots-2](db-diagram.svg)

### TypeORM CLI

##### To Create New Entity

`npm run typeorm entity:create src/database/entities/{EntityName}`

##### To Create New Migration

`npm run typeorm migration:create src/database/migrations/{MigrationName}`

##### To Generate New Migration from Entities - [Link](https://typeorm.io/using-cli#generate-a-migration-from-existing-table-schema)

`npm run typeorm migration:generate src/database/migrations/{MigrationName} -- -p -d src/database`
