## Role-Based Authorization (RBAC) in NestJS



###### How does Auth0 store and manage user roles?

Auth0 stores the roles in their own database. They can store user roles inside of the JWT (JSON web token) itself, kind of like metadata. It can also be managed by the management API, however, it might be slower due to extra api calls. 



###### What is the purpose of a guard in NestJS?

Guards check before route handlers and decide if this request can be continued or not. It can check for authentication, rate limiting, and  check if resource exists before processing. 



###### How would you restrict access to an API endpoint based on user roles?

You can use @guards and @roles in front of the entire class or specific methods. When a request comes in, AuthGuard will validate JWT, RolesGuard will check for roles, and route habdler will only execute if they all pass through. 



###### What are the security risks of improper authorization, and how can they be mitigated?

Risks include..         and migitated by..

broken access control: accessing another persons data by changing the url (put another user id there). 	Check if it is their own resource. post.userid = req.user.id

trusting client side data: user sends admin: true in the request body. 		dont trust client with auth decisions

JWT tampering: someone modifying their JWT for admin role. 	Verify JWT signatures and use https

role issues: forgetting to restrict endpoints. 		can do a default deny approach. 



in general, use guards consistently, combine role check with resource base check, log authentication failures, test negative cases. 



Proof of using guards and roles with auth0:

https://docs.google.com/document/d/1YJj7ufFIJvrdsiN2qSjaGotQlh-Dz\_C516CEopA4qZk/edit?usp=sharing



