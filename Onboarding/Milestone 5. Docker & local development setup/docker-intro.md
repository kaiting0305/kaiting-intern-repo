## What is Docker and Why Use It?





###### How does Docker differ from a virtual machine?

A virtual machine contains an entire OS inside of it. It takes longer to start (minutes), more space(maybe 2 GB), and is more private. It will have its own OS kernel, which is kind of like a manager between the hardware and applications. Kernel can delegate amount of cpu or space to a given program. 

Docker containers share the same host OS kernel. It only packages the app and its dependencies. It uses less space (maybe 100 MB), fast to start (seconds). 





###### Why is containerization useful for a backend like Focus Bear’s?

It will eleminate the problem of 'works/doesnt work on my laptop'. Setting it up is extremely easy and configuration instruction is in a file. A lot less mistakes and faster. Everyones laptop do not need to install a buunch of different apps (PostgreSQL, Redis, etc.)



###### How do containers help with dependency management?

Sometimes, different projects will require different versions of the same apps. Install python 3.9 for project A and project B that needs python 3.11 wont work. Containers solve this. 



Here is a quick visualization from claude ai. 

Container 1 (Project A):

├── Python 3.9

├── Node.js 16

├── PostgreSQL 13

├── libssl 1.1

└── All Project A code



Container 2 (Project B):

├── Python 3.11

├── Node.js 18

├── PostgreSQL 15

├── libssl 3.0

└── All Project B code



Your Host System:

└── Clean! Just Docker Engine





###### What are the potential downsides of using Docker?

It is confusing to learn for beginners. Will have to learn images, containers, volumes, etc. for Mac and Windows, there will be a small VM running and will be slightly slower compared to if you just ran the app itself and not through docker. Images/containers/volumes take up space. Container networking/port mapping might also be different and complex. containers talk to each other by service name and not localhost. Debugging might be hard if debugger isnt attatched to container. The docker desktop itself takes 2GB to run. 









