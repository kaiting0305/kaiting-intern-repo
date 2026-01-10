## Setting Up Docker and Docker Compose



#### Key docker commands

docker run postgres:14       : Start one container

docker ps: List running containers

docker stop my-container: Stop one container

docker logs my-container: View logs

docker exec -it my-container bash: Enter a container





###### What is the difference between docker run and docker-compose up?

Docker run starts a single container up and is manual. you need to give it the specs/connections in the command. Whereas docker-compose up will start up all the containers in the docker-compose.yml file. 



###### How does Docker Compose help when working with multiple services?

Docker compose make connecting to all services extremely easy. You just need to set it up in docker-compose.yml and only need to enter a simple command and every time, docker will start the services exactly as described. Whereas if you dont use docker, you will need to connect to each service indivisually to different ports with all the different dependancies and environmental variables. It might also cause mistakes. 



###### What commands can you use to check logs from a running container?

View logs from a specific container:

docker logs postgres-practice



Follow logs in real-time (like tail -f):

docker logs -f postgres-practice



Show last 100 lines:

docker logs --tail 100 postgres-practice



Show logs from last 10 minutes:

docker logs --since 10m postgres-practice



Show logs with timestamps:

docker logs -t postgres-practice





###### What happens when you restart a container? Does data persist?

Data will persist as long as you are using volumes. you can create a volume on your host computer and the data will still be there if u restart the container. 











