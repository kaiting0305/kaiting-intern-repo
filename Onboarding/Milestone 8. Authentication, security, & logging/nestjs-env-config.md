## Handling Environment Variables \& Configuration in NestJS



###### How does @nestjs/config help manage environment variables?

It loads .env file automatically and no need for manual dotenv.config() to load it. You can set env variables to be seen globally in configService. It also ensures type-safe access with configService andtead of obtaining the raw information. With Joi, we can catch missing or invalid environmental variables before we start the app. Lastly, we can group related variables together in configurations. 



###### Why should secrets (e.g., API keys, database passwords) never be stored in source code?

Other people will see it. Git history is stored forever. People who hacked into GitHub repo, previous employees, contractors can all see it. We might need to share repo or make it public in the future. There may be bots scanning GitHub for leaked APIs. There are also regulations in place (like SOC 2, etc.)



###### How can you validate environment variables before the app starts?

When the app is starting, config module will first load the .env file, and Joi will calidate it against schema. It is invalid, then it will stop the app from running and retun an error message. 



###### How can you separate configuration for different environments (e.g., local vs. production)?

We can seperate configuration for different environments by having multiple .env files. we can have .env.development, .env.staging, and .env.production. 

We can also try havign local development use .env and production use environment variables set in Kubernetes, docker, or AWS secret manager





proof of having .env file and validating env before app starts:

https://docs.google.com/document/d/1yre2KbCf-AgMuYAmRqF04ikYZG3f6l4wjFzLgovwOC0/edit?usp=sharing



