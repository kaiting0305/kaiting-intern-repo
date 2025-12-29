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

&nbsp; if(weather == "sunny"){

&nbsp;   console.log(`this is a good sunny monday`);

&nbsp; }else if(weather == "cloud"){

&nbsp;   console.log("this is a cloudy monday");

&nbsp; }else if(weather == "storm"){

&nbsp;   console.log("this is a stormy monday")

&nbsp; }

}else if(day == "tuesday"){

&nbsp;   if(weather == "sunny"){

&nbsp;   console.log(`this is a good sunny tuesday`);

&nbsp; }else if(weather == "cloud"){

&nbsp;   console.log("this is a cloudy tuesday");

&nbsp; }else if(weather == "storm"){

&nbsp;   console.log("this is a stormy tuesday")

&nbsp; }

}else if(day == "wednesday"){

&nbsp; //other day of the week

}





}



daytime();





Whats wrong with this code is that it is overly complicated. So many if else statements and can be reduced by alot. 



Cleaned version:



var day ;

var weather ;



weathers = {

&nbsp; sunny:"sunny",

&nbsp; cloud:"cloudy",

&nbsp; storm:"stormy"

}



let daytime = function(day, weather){

&nbsp; console.log(`this is a good ${weathers\[weather]} ${day}` )

}



daytime("monday", "cloud");





Notice how we enums and the code itself is much more simple. Takes up a lot less space and less repetitive. 

