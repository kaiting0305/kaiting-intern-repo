## Clean code





###### Simplicity – Keep code as simple as possible.

If there is a way to write the code in 5 lines instead of 50, do the simple one. Do not overcomplicate things.



###### Readability – Code should be easy to understand.

Make ur code as readable as possible. Name your variables with meanings. Have smaller helper functions. add comments. Do not have magic numbers. Have constants.



###### Maintainability – Future developers (including you!) should be able to work with the code easily.

Make the code easy to maintain, extend, and change. You should not have tight coupling with unrelated items. Do not have magic numbers.



###### Consistency – Follow style guides and project conventions.

Follow the style in which the company works. If people use camelCase, then use it. Be consistent. It will be easier to understand and intuitive.



###### Efficiency – Write performant, optimized code without premature over-engineering.

Write your code clean and elegant without overfocusing on all the tiny micro-optimizations that dont provide much usefulness.





###### Online messy code example (https://forum.freecodecamp.org/t/need-help-with-an-example-of-clean-elegant-code-vs-bad-messy-code/583563/2):

var day = "monday";

var weather ="sunny";



let daytime = function(){

if(day == "monday"){

  if(weather == "sunny"){

    console.log(`this is a good sunny monday`);

  }else if(weather == "cloud"){

    console.log("this is a cloudy monday");

  }else if(weather == "storm"){

    console.log("this is a stormy monday")

  }

}else if(day == "tuesday"){

    if(weather == "sunny"){

    console.log(`this is a good sunny tuesday`);

  }else if(weather == "cloud"){

    console.log("this is a cloudy tuesday");

  }else if(weather == "storm"){

    console.log("this is a stormy tuesday")

  }

}else if(day == "wednesday"){

  //other day of the week

}





}



daytime();





Whats wrong with this code is that it is overly complicated. So many if else statements and can be reduced by alot.



Cleaned version:



var day ;

var weather ;



weathers = {

  sunny:"sunny",

  cloud:"cloudy",

  storm:"stormy"

}



let daytime = function(day, weather){

  console.log(`this is a good ${weathers\\\[weather]} ${day}` )

}



daytime("monday", "cloud");





Notice how we enums and the code itself is much more simple. Takes up a lot less space and less repetitive.







### Code Formatting \& Style Guides



##### Why is code formatting important?

Correct code helps prevent errors. There may be multiple ways of correct code, but it is better to be consistent, concise. Consistent code gives less mental strain as it is one less thing to think about. Conciseness is good because it saves time and is not overly complicated for other people. 



##### Reflections

###### Airbnb reflection

Went through a lot but not the whole page since It's really long. These rules can be used as ESLint's rule. Two things that stood out was multiline format for multiline lists and spreads (...)



**Multiple line lists**

Example: 

function foo(

&nbsp; bar,

&nbsp; baz,

&nbsp; quux,     //note that there is even a comma at the very last one

) {

&nbsp; // ...

}



**Spreads (...)**

basically a shorthand that means to unpack everything and spreads them into a new location. Commonly used to copy properties from objects and arrays. 



###### ESLint and Prettier Reflection

I have installed ESLint and Prettier into my VSCode but have not configured and tested it. It seems to be complex trying to make a practice project configuring it all and I won't be needing it when doing future Focus Bear tasks. Instead, I researched into what exactly these two tools do. 

I watched the following video about ESLint and Prettier in VSCode:  https://www.youtube.com/watch?v=E2tbZoTjcQA



ESLint is a tool used to catch code style and quality issues and will give warnings or error messages. For example, it can catch any unused variables and suggest to remove it. We can use a popular config like Airbnb's set of rules or eslint's recommended rules. It is different from typescript as typescript is used to catch type errors.  



Prettier is a tool used to autoformat the code to make it pretty and consistent. For example, if its set to run on save, each time I save a file, Prettier will make sure the file's format is good. Indentations and extra spaces issues will be automatically fixed.





### Naming Variables \& Functions

###### What makes a good variable or function name?

A good variable or function name will be descriptive, specific, and show the intent. For example, instead of date, use currentDate. instead of check, use isUserAdult. Other programmers should not have to guess what a variable or function does. They should be able to find out based on the name. 



###### What issues can arise from poorly named variables?

Poorly names variables can cause other programmers or even yourself to have difficulty understanding your code. It will be easier to mix up variables and will take both more time and more mental strain on understanding code. 



###### How did refactoring improve code readability?

Refactoring code improves the readability of code tremendously. The original bad code below was really ambiguous and you cant tell what the function is doing on first glance. In the bad example, function named calc does not tell us exactly what it calculates. In the refactored version, we give it a clear name calculatePriceWithTax. We also have clear and descriptive names for every variable in the fixed version. Better to understand for people who never seen it before, more clearer for the programmer. 



**Bad code (from claude)**



function calc(a, b, c) {

&nbsp; const x = a \* b;

&nbsp; const y = x \* (c / 100);

&nbsp; return x + y;

}



const u = {

&nbsp; n: 'Kai',

&nbsp; a: 21,

&nbsp; e: 'kai@example.com'

};



function chk(obj) {

&nbsp; if (!obj.n || !obj.e) {

&nbsp;   return false;

&nbsp; }

&nbsp; if (obj.a < 18) {

&nbsp;   return false;

&nbsp; }

&nbsp; return true;

}



--------------------------------------------------

**fixed code**

function calculatePriceWithTax(price, quantity, taxRate) {

&nbsp; const subtotal = price \* quantity;

&nbsp; const taxAmount = subtotal \* (taxRate / 100);

&nbsp; return subtotal + taxAmount;

}



const user = {

&nbsp; name: 'Kai',

&nbsp; age: 21,

&nbsp; email: 'kai@example.com'

};



function isValidUser(userObject) {

&nbsp; if (!userObject.name || !userObject.email) {

&nbsp;   return false;

&nbsp; }

&nbsp; if (userObject.age < 18) {

&nbsp;   return false;

&nbsp; }

&nbsp; return true;

}





### Writing Small, Focused Functions



###### Why is breaking down functions beneficial?

Every function should only perform one thing. It should not be a complicated function with different purposes. This will make it a lot easier to understand. With more functions with clear names, we are able to understand the general flow without having to understand the code. If it were one huge function, it would also be too vague for us to understand whats going on.

On top of that, if there are any problems, we know exactly which function and step is the one causing the problem Since each step is in its own function. Making smaller functions will also be easier to reuse as there are more 'smaller' functions with specific purposes. 

Additionally, if there are two different purposes in the same function, changing one of the aspects might accidentally affect the other. Editing the code later to fix bugs or just adding feature might mess up the other working component.  



###### How did refactoring improve the structure of the code?

After refactoring, the code became a lot more readable. My original 'bad' code (from claude) was very lengthy and confusing. At first glance, I didn't know the exact purpose of each block of code. After splitting it into different functions, it became quite clear and easy to process. With the splitting into different functions, if there are any bugs, I know exactly which part of the code is wrong. In the future, if there is a need to use any single function, it does not need to be rewritten. 



Example: Instead of one huge function processUserOrder, we can split it into 8 different functions each with its own purpose. User validation, item validation, price calculation, payment processing, inventory management, order creation, email notification, and the final main execution function that combines everything into a workflow. In the future, signing in to an account will share the code of user validation. 





### Avoiding Code Duplication



###### What were the issues with duplicated code?

With code duplication, the whole document becomes really long and harder to comprehend. If not typing everything out and taking a lot longer, copying and pasting continuously might also cause problem if you accidentally copy and paste wrong. If you need to change a function, you might have to change it in so many places if you have duplicate code. Whereas if you only use a single function that is implemented in multiple places, only changing the function once will get the job done. New teammates will also have to check the code for a longer time. There might be small differences that may be overlooked in the 'duplicate code' that may be intentional or accidental. 



###### How did refactoring improve maintainability?

By having only one instance of a function or code with multiple references, I can update/change/modify/fix/extend only that one place instead of having to go around the document and searching for  every single one. I might miss out on an instance or have a typo somewhere lost in the long document. It will be better organized as it is not as long of a code and easier to understand. 





### Refactoring Code for Simplicity



###### Common Refactoring Techniques

Extract Method - Pull code into a separate function 

Replace Conditional with Polymorphism - Use objects/classes instead of if/else chains

Introduce Parameter Object - Group related parameters into an object

Replace Magic Numbers with Constants - Name your numbers

Simplify Conditional Logic - Use early returns, guard clauses

Replace Nested Conditionals with Guard Clauses - Return early

Decompose Conditional - Extract complex conditions into named functions

Remove Dead Code - Delete unused code

Consolidate Duplicate Conditional Fragments - Move common code outside conditionals



###### What made the original code complex?

The original code (form claude) had a lot of magic numbers within the code. By defining the constants at the front and forming appropriate enums, the code became a lot cleaner. The original code was long and had multiple purposes, it needs to be split into smaller functions each with one purpose only. The original code passes 8 parameters into a function, we can change this into an object message and the code is a lot more simple, especially when calling the function. The original code also had a lot of stages of conditional clauses (deep nesting) which was harder to follow. 

###### How did refactoring improve it?

There are no magic numbers that bring unclarity to the code. Code becomes a lot cleaner. Wont be too hard to follow as no more deep nesting and more smaller/specific functions. Will be easier to test and maintain code. Code in general is more concise. Replacing conditional w objects is also easier to add onto. Making larger parameter into an object makes code clear and meaningful, as well as easy to add onto in the future. 





### Commenting \& Documentation

Comments should be about **why** and not what the code does. 



###### When should you add comments?

Should have comments for why you chose this approach, explaining business rule to better understand why this method is used of purpose of this function/feature, explaining complex algorithms if you can't break it apart into smaller ones, explaining tradeoffs with this method of doing things, warnings about constraints or other things, to do work/temporary workarounds and let it be known that this is just a temporary solution, can also include the timestamp.  

When there is a public API that needs documentations so other developers only need to know what the function does and do not need to know the entire happenings inside the function. 



###### When should you avoid comments and instead improve the code?

When simple code needs further explaining, make the code more self explanatory. 

When variable names are unclear, change it. 

When function too complex and need explaining, consider breaking the function down into multiple. 





### Handling Errors \& Edge Cases



###### Error Handling Strategies

Guard Clauses - Check preconditions early and exit(

Eg:   

&nbsp; // Guard clause: validate user

&nbsp; if (!user) {

&nbsp;   throw new Error('User is required for discount calculation');

&nbsp; }

&nbsp; 

&nbsp; if (!user.joinedYear || user.joinedYear < 1900 || user.joinedYear > new Date().getFullYear()) {

&nbsp;   throw new Error(`Invalid user joinedYear: ${user.joinedYear}`);

&nbsp; }

)

Validation - Verify inputs before processing

Fail Fast - Detect errors as early as possible

Descriptive Errors - Make error messages helpful

Error Recovery - Handle errors gracefully when possible

Default Values - Provide sensible fallbacks



###### What was the issue with the original code?

Original code crashes on invalid inputs, null inputs, negative or zero numbers that may cause wrong calculations (even if it doesnt crash), and missing properties. It does not have a safety catch in case action fails if data/parameter is not found. There is no input validation, null or undefined checks, edge cases handling, and execution error handling. 

With no exceptions thrown or any error message, we dont know what went wrong and will be difficult for us to fix the code. Maybe because of an invalid input, the code will not run, but it is only until towards the end of the code that we use the information and we have difficulty finding out where and what went wrong. 



###### How does handling errors improve reliability?

Guard clauses work really well in finding out errors/invalid inputs at the very start. It helps prevent invalid inputs, confirm external dependancies, checks for null inputs. Error handling orevents errors with mathematical and array edge cases, and checks if objects and parameters exist in the database and have rollback if there is a failure to execute a code. Error messages should also be described so developers know exactly what is wrong. Can create custom error types to throw. With error handling, if an optional feature fails, the main program can still run and not just crash. 









