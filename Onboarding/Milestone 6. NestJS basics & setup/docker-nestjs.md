### Using Docker for NestJS Development



###### How does a Dockerfile define a containerized NestJS application?

A dockerfile is a recipe that tells Docker how to build an image of the containerized Nest JS. 

It will specify operating system, runtime environment (node.js), dependencies(package.json), application code(src compiled to dist), and how to run it(node dist/main.js). 



###### What is the purpose of a multi-stage build in Docker?

The purpose of a multi-staged build is to create smaller and more secure production images by separating runtime and build time dependencies. 

It only needs production dependencies but unnecessary things are included in the image if single stage.

multi-stage build will have a clear build stage that has compilers and build tools, and a production stage that has just what is needed to run. 



for single stage build, it will install everything including things not needed, including 



###### How does Docker Compose simplify running multiple services together?

Docker compose lets us run multi-container application in the same configuration file. There will be no manual set up during that time and less errors are likely to happen. commands become simple and clean. 



###### How can you expose API logs and debug a running container?

1. 

You can view container logs

For docker, you can do

docker logs nestjs-backend



for docker compose you can so

docker-compose logs backend



both can include -f for real time logs. docker can also use -t to show timestamps



2\. 

you can also enter the running container

docker exec -it nestjs-backend sh



Now you're inside the container and can do the following commands:

ls -la              # List files

cat dist/main.js    # View files

printenv            # See environment variables

ps aux              # See running processes

netstat -tuln       # See network connections



3\. 

You can also see it from nest js. you can add in your code:

console.log('User created:', user); 

and then when u run the following command, u can see the logs

docker-compose logs -f backend





4\.

you can also inspect container details with 

docker inspect nestjs-backend



running both nestjs and postgreSQL and connectivity:

https://docs.google.com/document/d/18RslUl5vY7qy8x5FpO5OqThDnIPhJWAqYf-lcgv3z70/edit?usp=sharing







