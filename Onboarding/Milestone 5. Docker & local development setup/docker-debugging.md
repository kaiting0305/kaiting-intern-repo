## Debugging \& Managing Docker Containers 

###### How can you check logs from a running container?

you use the command docker logs \[container name]

useful add-on commands

-f to see logs in real time

-t with timestamps

-- tail 100 to see latest 100 logs

--since 10m for logs in the last 10 min 



###### What is the difference between docker exec and docker attach?

docker exec starts a new process inside a container. You can run commands and close it when your done and the container will keep running. 

On the other hand, docker attach will connect to the container's main process. When you are done and close the process, the entire container will also stop working. 

ALMOST ALWAYS USE DOCKER EXEC. Its safer and more flexible.





###### How do you restart a container without losing data?

We can save the data in volumes. volumes store data in host computer. Without volumes, you will lose data if you stop and remove container, with volumes, the data will be stored. 



###### How can you troubleshoot database connection issues inside a containerized NestJS app?

1. check if container is running
2. check connection string  | common mistake: using local lost as database host. need the container name.
3. check if database is ready
4. test connection manually
5. check docker network
6. check database logs for connection attempts
7. nest js specific debugging



common mistakes:

Port conflicts: If you're mapping to host ports, make sure 5432 isn't already taken by a local PostgreSQL

Volume permissions: Sometimes database containers fail because they can't write to the volume directory

First run: On first startup, Postgres needs to initialize. This takes time. The backend might try connecting too early.



