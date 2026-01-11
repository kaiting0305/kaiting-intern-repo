## Setting Up a NestJS Project



###### What files are included in a default NestJS project?

A default nestJS project includes a main.ts, which is the entry point. It will also have a controller.ts, service.ts, controller.spec.ts, service.spec.ts where specs are used to test the file with the corresponding name. It will need a package.json for dependencies and scripts, tsconfig.json for typescript configuration, and nest-cli.config for nest cli. It may also include a .eslintrc.js for linting rules and a .prettierrec for code formatting. 



###### How does main.ts bootstrap a NestJS application?



1\. Node.js executes main.ts

&nbsp;   ↓

2\. bootstrap() function called

&nbsp;   ↓

3\. NestFactory.create(AppModule)

&nbsp;   ↓

4\. NestJS scans AppModule

&nbsp;   ├─→ Finds controllers: \[AppController]

&nbsp;   ├─→ Finds providers: \[AppService]

&nbsp;   └─→ Finds imports: \[]

&nbsp;   ↓

5\. Builds dependency graph

&nbsp;   AppController → AppService

&nbsp;   ↓

6\. Creates instances

&nbsp;   const appService = new AppService();

&nbsp;   const appController = new AppController(appService);

&nbsp;   ↓

7\. Registers routes

&nbsp;   GET / → appController.getHello()

&nbsp;   ↓

8\. Creates Express server

&nbsp;   ↓

9\. app.listen(3000)

&nbsp;   ↓

10\. HTTP server starts

&nbsp;   ↓

11\. Application ready to handle requests



###### What is the role of AppModule in the project?

appModule is the root module and the starting point of the application. Everything gets imported through it. It imports and connects all feature modules, orchestrates all the dependencies needed, and defines the the configuration needed. 



###### How does NestJS structure help with scalability?

since there are modules, there will be a lot of smaller files each with its own function and related features in a single module. Adding a module will not affect other code, easier scalability. Modules are reusable. They are not coupled together, so easier to maintain/change/improve on. It can also be tested easily. Different developers can also work on different modules without affecting each other as much. 



proof of setting up my own nestJS project:

https://docs.google.com/document/d/14YjyAZjd\_R147uvsA7ZiPgHpCT9tY\_lpMZwiemx6SOY/edit?usp=sharing











