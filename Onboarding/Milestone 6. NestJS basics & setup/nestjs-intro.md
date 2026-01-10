### What is NestJS? (Framework Overview)





###### What are the key differences between NestJS and Express.js?

NestJS and Express.js are both frameworks for Node.js. Express.js is very minimal and flexible and less structure. NestJS is built on top of Express and is more structured + better for a bigger team since there are built in patterns and easier to maintain as everyone will have to organize code the same way. 

NestJS uses typescript and Express uses JavaScript, though they both support both typescript and javascript. 



###### Why does NestJS use decorators extensively?

decorators will tell us what this chunk of code is about. We will save having to code more lines of repetitive code that may lead to more errors. There is also no type safety. With decorators, there will be less code as it handles boilerplates, has clear intentions, has type safety, has automatic dependency injection, and is easier to read. 



###### How does NestJS handle dependency injection?

Nest JS has its own IoC(inversion of control) container that manages creating and providing dependencies. 

@Injectable tells NestJS that this class can be injected

It then registers providers in modules

Nest JS creates instances

Finally you can inject where needed





###### What benefits does modular architecture provide in a large-scale app?

It groups together all the related files. More organized, and other modules cannot use items unless exported. Helps with encapsulation. With modules, its easier to split up work and will be working on different files. Without modules, they may be working on the same ones and becomes messy. Modules can be loaded on command so will have a faster start up as it doesn't need to load everything yet including the unused code. 

Well designed modules can be reused. Testing can be done without loading the entire app. There will also be clear dependencies as there are explicit imports. 	



