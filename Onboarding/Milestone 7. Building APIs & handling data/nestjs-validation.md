## Validating Requests with Pipes in NestJS



###### What is the purpose of pipes in NestJS?

The purpose of pipes is to transform and convert data from one type to another. Can make minor edits to the input parameter according to the pipe. Another purpose is to check if data meets the requirement and reject any that doesn't meet requirement. This makes sure that data is clean before it reaches my controllers and services. 



###### How does ValidationPipe improve API security and data integrity?

There are injection attacks that can be prevented. For example, the following could be blocked by the validation pipe



{ 

&nbsp; "title": "Task",

&nbsp; "evilField": "DROP TABLE users;" 

}



It can make sure the data received is of what we want and ensures data consistency. It can prevent inputs that are trying to mess with the system (large numbers) or just accidental empty or missing inputs. 



###### What is the difference between built-in and custom pipes?

Built in pipes are provided by nestJS. They are already coded for us and ready to use. It is already well tested and reliable. A lot of the common most used transformation and validations are made into built in pipes. Custom pipes are pipes where we have to write the logic ourselves. They handle more specific and unique needs. They must implement the PipeTransform interface. 





###### How do decorators like @IsString() and @IsNumber() work with DTOs?

Decorators are like metadate markers. They tell ValidationPipe that "this property shoule be a string" or smth like that. It will then check if the data type matches the rules. Only when it passes will there me a validated DTO instance. 





proof of custom pipe and global pipe validation:

https://docs.google.com/document/d/1GVXkq7dhONnfAbPIpsdxWlVS-Ko7h9Y1NDhATB1NjMc/edit?usp=sharing







