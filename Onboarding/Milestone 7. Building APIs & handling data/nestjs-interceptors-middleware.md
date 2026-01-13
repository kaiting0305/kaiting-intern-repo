### Using Interceptors \& Middleware in NestJS



###### What is the difference between an interceptor and middleware in NestJS?

The middleware runs before the route handler. It can access the request and the response, however, it can't change the response easily. The interceptor runs before and after the route handler. It can make changes to the response. It can measure execution time and add metadata. 



Middleware example: authentication, request loggings, adding request metadata. 

Interceptor example: response transformation, logging with timing, caching, error handling, adding extra data to responses



request comes->middleware->interceptor->route handler->interceptor->response given



###### When would you use an interceptor instead of middleware?



Use middleware when:



Check authentication before the request continues

Parse or validate the request body

Add custom properties to the request object (requestTime)

Block requests early (before reaching the handler)

Do simple request logging



Use interceptor when:



Transform or wrap the response (e.g., { success: true, data: ... })

Measure how long operations take

Cache responses

Handle errors in a consistent way

Add headers based on the response

Remove sensitive fields from responses (like passwords)



###### How does LoggerErrorInterceptor help?

A LoggerErrorInterceptor would catch errors that happen during request processing, log them with details (what endpoint, what went wrong, stack trace), transform error responses into a consistent format, and help debug issues in production





proof of adding middleware and interceptors:

https://docs.google.com/document/d/1fe5q3cD6xE9pz8tkhDO6sSeQgzJi9JGa5rMwV\_lNE-c/edit?usp=sharing





