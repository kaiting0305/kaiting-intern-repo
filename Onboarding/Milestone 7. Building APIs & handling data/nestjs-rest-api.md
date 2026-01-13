## Creating REST APIs with NestJS



REST = REpresentational State Transfer

It's a way of organizing APIs using...



HTTP methods (GET, POST, PUT/PATCH, DELETE) to indicate the action

URLs (endpoints) to identify resources

Standard status codes (200, 400, 404, 500) to communicate results



###### What is the role of a controller in NestJS?

A controller is responsible for receiving http requests, decide which methods to run, and return responses. It is not responsible for the actual logic. It defines the routes, extracts data from requests, call services, and return responses. 



###### How should business logic be separated from the controller?

All of the business logic should be kept in a 'service' file and not in the 'controller' file. This will keep the controller file clean and easier to understand. It will not have all the messy logic code.  



###### Why is it important to use services instead of handling logic inside controllers?

With services, complicated logic can be held there and controllers can be clean, making it easier to understand. With the logic inside the service, code there can be changed without affecting the overall controller. It will be easier to maintain, test, and update as it can be done without affecting the other part of code.  Since it separates the roles, it can also be easier to scale. People can just add services and services can even call other services. 



###### How does NestJS automatically map request methods (GET, POST, etc.)to handlers?

NestJS uses decorators to create metadata about routes on controller methods, then they read that during runtime. It registers routes with Express, and each decorator specifies the http method and path. When the requests arrive, Express matches it to the registered route and NEstJS calls the appropriate handler method. 



Proof of having controller and service separate. 

https://docs.google.com/document/d/14eIDKi58orPw7gMXovC89rGV1ulSIL7Q7FAO5SOl194/edit?usp=sharing



