## Understanding the Focus Bear Coverage Bar \& Writing Meaningful Tests



###### What does the coverage bar track, and why is it important?

The coverage bar tracks which lines of code is being executed during the test. It will include statements, branches, functions, and lines. statements are individual instructions, branches are different branches in conditional statements, functions are how many functions get called, and lines show lines executed. 



###### Why does Focus Bear enforce a minimum test coverage threshold?

It needs to ensure that the quality of code is good before putting it into production. With more coverage, there are more things tested and more bugs catched. This could catch security and performance issues. It make sure most of your code is being tested. 



###### How can high test coverage still lead to untested functionality?

High coverage does not mean they are all success. It also does not mean it checks every parameter or aspect of it. There might be no assertions or useless assertions (eg: expect(result).toBeDefined)



###### What are examples of weak vs. strong test assertions?

Weak assertions checks are missing a lot of checks that might discover problems, for example just checking if something exists and not checking if it is correct. Strong assertions check for actual bug, verify data, test edge cases, tests error handling, test empty/invalid inputs, tests business logic, and in general test for multiple scenarios. 



###### How can you balance increasing coverage with writing effective tests?

Write tests to test functionality, not to include different functions. instead of thinking about the coverage, think about what this code should do. Focus on code that is essential and have higher priority like authentication, payment, data validation, and error handling. Coverage is used to spot missing areas and gaps. Instead of treating coverage as a goal, use it as a tool. You will gradually have more coverage as you have more tests on functionality. 





Proof of testing coverage and meaningful tests. 

https://docs.google.com/document/d/1vyYUIrQaPWlyevbWt72ClXQkbPAHiEX3P\_RW0QCbgYY/edit?usp=sharing





