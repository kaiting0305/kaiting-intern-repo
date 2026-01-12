## Background Jobs with BullMQ \& Redis in NestJS



###### Why is BullMQ used instead of handling tasks directly in API requests?

BullMQ allows tasks to be run in the background and start the next task. This means that there will be less feedback delay. Even if the job execution crashes, the job still exists in the job queue so workers can pick it back up. You can also alloy scalability and have more workers working or control how many jobs are being worked on at a time. 



###### How does Redis help manage job queues in BullMQ?

Redis has a built in data structures that is perfect for queues. It has lists for the queue, hashes for job data, and sorted sets for job priorities and delays. Redis allows multiple workers to take jobs without conflicts and immediately, have jobs that survive crashes as it saves to disk, and is fast because its in RAM



###### What happens if a job fails? How can failed jobs be retried?

Jobs that fail will be marked in Redis so it knows which jobs didn't succeed. We can then use backoffs to retry failed jobs (often with exceptional delay). you can also catch failed jobs and print to console or see what you want to do with the error. 



###### How does Focus Bear use BullMQ for background tasks?

When users finish a session, before finishing entering all the data into the database, the user can revieve the congratulations message immediately and wont have to wait for other tasks to finish and then reviece the message. It can also use BullMQ for notifications for focus sessions or habit reminders and have it running in the background. 





proof of using bullMQ and redis:

https://docs.google.com/document/d/1PXd8fBaS9jSWKYAi0El4STbUl6tAWFxMOZtL9NvyfbI/edit?usp=sharing



