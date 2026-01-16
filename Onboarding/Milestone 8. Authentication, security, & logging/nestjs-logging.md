## Logging \& Error Handling in NestJS



###### What are the benefits of using nestjs-pino for logging?

Pino is the fastest Node.js logger. NestJS's built-in logger is synchronous (blocks your code), Pino is asynchronous (doesn't slow down requests). We can get structured JSON logs from Pino. Pino automattically logs everything and each logs shows which request its from. 



###### How does global exception handling improve API consistency?

All of the error/exception message/code will have the same format and code. Without being globally handled, different files might show different error formats. 



###### What is the difference between a logging interceptor and an exception filter?

Logging happend on every request whether it succeed or not. It tells more information to the developer side and can be used to track if tasks suceed or not. Exception filter is only used when an error occurs. It formats error message for clients and logs details for developers. 



###### How can logs be structured to provide useful debugging information?

Logs should be traceable and informative (who what when ). They should track a request across different services (have a request id). It should have appropriate log severity levels. It should not include sensitive information. It is better to add business context if can. 



proof of using logger and custom exception filter + exception handling:

https://docs.google.com/document/d/1Cn8DQp6RPYRA-wIZmAXyxVCRH0t3eYw\_IqK7yScLTBg/edit?usp=sharing



