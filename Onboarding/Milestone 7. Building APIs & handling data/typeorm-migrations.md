## Seeding \& Migrations in TypeORM





###### What is the purpose of database migrations in TypeORM?

Database migrations in TypeORM is basically the version control for my database schema. It records all of the changes I made and will also allow me to revert back to a previous stage if I want to. It also ensures that different environments (local, staging, and production) all have the same exact  database structure. 



###### How do migrations differ from seeding?

Database migration is used to create and update the structure of the database schema. You can create tables or add columns with migration. Seeding is creating example/test data that can be used for testing code. 



###### Why is it important to version-control database schema changes?

It will allow us to see information about past changes, including what, when, and who. Should there be any problems that require you to go back to a prior state of the app, you can easily do so with migration. During CI/CD, migrations can be tested before it is properly applied in production. 



###### How can you roll back a migration if an issue occurs?

Every migration file contains two main functions. An 'up' function that applies changes and a 'down' function that reverses the changes. You can use the following command to reverse the changes. 

typeorm migration:revert -d path/to/datasource.ts

this command only goes back by one version. 





Here is proof of experimenting with both seeding and migration on my own practice project:

https://docs.google.com/document/d/1ORy4DLGhkLlflapm\_VgflausOqXr15jRpAwEc3ppFiU/edit?usp=sharing



