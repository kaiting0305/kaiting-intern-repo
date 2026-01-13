## Connecting to PostgreSQL with TypeORM in NestJS



###### How does @nestjs/typeorm simplify database interactions?

TypeORM is a tool used to communicate to the database for us. Instead of writing a lot of queries in SQL format within our code, we can write them in more understanding way and typeORM will automatically convert it into valid sql queries. We can focus less on sql and more on our logic and code. 



Common repository methods:

\- `find()` - Get all records (becomes `SELECT \* FROM tasks`)

\- `findOne()` - Get one record (becomes `SELECT \* FROM tasks WHERE...`)

\- `create()` - Make a new Task object (doesn't save yet)

\- `save()` - Insert or update in database (becomes `INSERT` or `UPDATE`)

\- `remove()` - Delete from database (becomes `DELETE`)

\- `update()` - Update without loading the entity first



###### What is the difference between an entity and a repository in TypeORM?

An entity a typescript class that is basically a table inside a database. A repository is a typeORM tool used for interacting with the entity's table. We can use CRUD methods without writing in SQL. 

entity defines the table structure. repository handles methods. 



###### How does TypeORM handle migrations in a NestJS project?

TypeOR< can generate a migration file based on entity changes. It will also keep track of which migrations have been run in a migration table. 



###### What are the advantages of using PostgreSQL over other databases in a NestJS app?

PostgreSQL supports complex queries, joins, and relationships between tables, stores JSON data efficiently, is ACID compliant (has rollbacks for failed transaction), is free and open source, has great TypeORM integration, and scalable. 



