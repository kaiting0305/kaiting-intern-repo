### Understanding Modules, Controllers, and Providers in NestJS

###### 

###### What is the purpose of a module in NestJS?

A module is a grouping of related files together. This organizes the folders and will be more intuitive. Each feature has its own module. It also helps with encapsulation as it only show what needs to be shown. It also makes it clear which other modules you need because it is clearly stated in imports. Creating modules also allow reusability. It will also provide faster startup as it only loads used modules on demand.



###### How does a controller differ from a provider?

A controller will not have any working logic. It merely acts as a agent that orchestrates everything. It receives http requests, delegates work to appropriate providers, then passes on information from the providers. Its a communicator and manager. 



###### Why is dependency injection useful in NestJS?

Dependency injection allows loose coupling. It splits files into one specific feature, making it easy to change, easier to debug and maintain, and avoiding god classes. It increases reusability as well as smaller classes can be reused. 



###### How does NestJS ensure modularity and separation of concerns?

It does so through architectural patterns and conventions. Modules provide encapsulation. It has clear responsibilities as classes are split into controllers and providers. It is also extremely organized because it is sorted by modules. 



