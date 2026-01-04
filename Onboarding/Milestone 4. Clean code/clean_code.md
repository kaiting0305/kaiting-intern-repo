### Clean code





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











