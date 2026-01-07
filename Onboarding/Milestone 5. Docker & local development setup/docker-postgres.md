##### Running PostgreSQL in Docker

What are the benefits of running PostgreSQL in a Docker container?

Everyones work environment will be the same. Easy set up and clean up. It will have the same configuration, version, etc. There will be no problems of "my laptop is different". It can allow teo different projects with two different versions of postSQL. The postSQL will be isolated from main. It if crashes, it wont affect main system. 



How do Docker volumes help persist PostgreSQL data?

Since containers come and go, the data inside can be lost. Volumes can store data so that if a container is closed and reopen, all the previous data stored in the volume can be taken out and put into the container. This will persist the PostSQL data. 



How can you connect to a running PostgreSQL cont

