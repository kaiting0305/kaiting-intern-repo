## Using Jest \& Supertest for API Testing in NestJS



###### How does Supertest help test API endpoints?

Supertest allows us to test our API by making legit http requests without actually having to start the server. Its like a fake browser. 



###### What is the difference between unit tests and API tests?

Unit test test for funcationality of specific pieces of code and the logic inside each function. They do not test the big flow like API tests. API tests for The actual HTTP request/response, request validation (ValidationPipe), authentication, controller routing, service logic, error responses, and response format. Its testing the endpoints. 



###### Why should authentication be mocked in integration tests?

Real authentication will heavily depend on the third party service. It the server is down, do is your auth. Creating a lot of test users will be difficult to manage and might add up to a sum of money due to the large amounts of API calls. The tokens you create also expire and it is not that easy to test different users with different roles easily. 



###### How can you structure API tests to cover both success and failure cases?

The general structure for API tests is Arrange, Act and Assert

Arrange: you set up the mock repo/database and everything

Act: you make the request of which you want to test

Assert: you check if the result is what you expect





proof of api testing

https://docs.google.com/document/d/1aDj06o7gAPe-gyq62EcbalG5ZA0OfHlZLACzUTK5jYc/edit?usp=sharing

