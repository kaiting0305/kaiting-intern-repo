### Dependency Injection in NestJS

###### 

###### How does dependency injection improve maintainability?

Using dependency injection will make it easier to swap out different services in the future. There will also be loose coupling between different files/concepts, making it easier to maintain. Since files are separated, editing one concept in one file will not affect another, whereas if no dependency injection, all code may be on the same file. It will also be easier to test, also you can use a testing database, not the real one to test. Dependency injection splits files to single purpose, no god class. 



###### What is the purpose of the @Injectable() decorator?

@injection marks classes as injectable, adds it to the DI container, enables metadata reflection (which is how nestjs knows dependencies), and configure provider options



###### What are the different types of provider scopes, and when would you use each?

Singleton: (fastest) 

One instance the entire application, lasts the entire time application is running. Use this for stateless services, database connections, configuration, and caches. This is the default. 



Request:

There will be a new instance for every request of it, request lifetime. Use request for request-specific logging, user context, audit trails, and tenant isolation. 



Transient: (slowest)

There will be a new instance every time it is injected. Rarely use this. Only use for stateful objects that need isolation and classes with heavy customization. 





###### How does NestJS automatically resolve dependencies?

1\. Scanning modules to find providers

2\. Registering providers in DI container

3\. Building dependency graph

4\. Creating instances in correct order

5\. Using TypeScript metadata to know what to inject

6\. Storing instances for reuse

