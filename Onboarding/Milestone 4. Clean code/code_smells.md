## Identifying \& Fixing Code Smells



#### Find or write code examples that demonstrate the following code smells:



##### Magic Numbers \& Strings – Using hardcoded values instead of constants.

###### Bad code



function calculatePrice(quantity) {

&nbsp; if (quantity > 10) {

&nbsp;   return quantity \* 25 \* 0.9; 

&nbsp; }

&nbsp; return quantity \* 25;

}





###### Refactored code

const int QUANTITY\_FOR\_DISCOUNT;

const double DISCOUNT 0.9;



function calculatePrice(quantity) {

&nbsp; if (quantity > QUANTITY\_FOR\_DISCOUNT) {

&nbsp;   return quantity \* 25 \* DISCOUNT; 

&nbsp; }

&nbsp; return quantity \* 25;

}





##### Long Functions – Functions that do too much and should be broken into smaller parts.

###### Bad code

function checkout(cart) {

&nbsp; // Validate

&nbsp; if (!cart.items || cart.items.length === 0) throw new Error('Empty cart');

&nbsp; 

&nbsp; // Calculate

&nbsp; let total = 0;

&nbsp; for (let item of cart.items) {

&nbsp;   total += item.price \* item.quantity;

&nbsp; }

&nbsp; 

&nbsp; // Apply discount

&nbsp; if (cart.user.isPremium) total \*= 0.9;

&nbsp; 

&nbsp; // Charge

&nbsp; const payment = stripe.charge(total);

&nbsp; if (!payment.success) throw new Error('Payment failed');

&nbsp; 

&nbsp; // Email

&nbsp; sendEmail(cart.user.email, 'Order confirmed!');

&nbsp; 

&nbsp; return total;

}







###### Refactored code



function checkout(cart) {

&nbsp; validateCart(cart);

&nbsp; const total = calculateTotal(cart);

&nbsp; const finalTotal = applyDiscount(total, cart.user);

&nbsp; processPayment(finalTotal);

&nbsp; sendConfirmation(cart.user.email);

&nbsp; return finalTotal;

}



function validateCart(cart) {

&nbsp;   /\* ... \*/

}



function calculateTotal(cart) {

&nbsp;   /\* ... \*/

}



function applyDiscount(total, user) {

&nbsp;   /\* ... \*/

}



function processPayment(amount) {

&nbsp;   /\* ... \*/

}



function sendConfirmation(email) {

&nbsp;   /\* ... \*/

}







##### Duplicate Code – Copy-pasting logic instead of reusing functions.

###### Bad code

function createUser(email) {

&nbsp; if (!email.includes('@')) throw new Error('Invalid email');

&nbsp; return db.users.create({ email });

}



function updateUser(id, email) {

&nbsp; if (!email.includes('@')) throw new Error('Invalid email');

&nbsp; return db.users.update(id, { email });

}



//more functions that need email validations



###### Refactored code



function validateEmail(email) {

&nbsp; if (!email.includes('@')) {

&nbsp;   throw new Error('Invalid email');

&nbsp; }

}



function createUser(email) {

&nbsp; validateEmail(email);

&nbsp; return db.users.create({ email });

}



function updateUser(id, email) {

&nbsp; validateEmail(email);

&nbsp; return db.users.update(id, { email });

}









##### Large Classes (God Objects) – Classes that handle too many responsibilities.

###### Bad code



class UserManager {

&nbsp; constructor() {

&nbsp;   this.users = \[];

&nbsp; }



&nbsp; // Email operations

&nbsp; sendWelcomeEmail(user) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; sendPasswordReset(user) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; sendNotification(user, message) {

&nbsp;   /\* ... \*/

&nbsp; }



&nbsp; // Payment operations

&nbsp; processPayment(user, amount) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; refundPayment(user, transactionId) {

&nbsp;   /\* ... \*/

&nbsp; }



&nbsp;    //more functions authentication options

}







###### Refactored code



class EmailService{

&nbsp;    sendWelcomeEmail(user) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; sendPasswordReset(user) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; sendNotification(user, message) {

&nbsp;   /\* ... \*/

&nbsp; }

}



class PaymentService {

&nbsp; processPayment(user, amount) {

&nbsp;   /\* ... \*/

&nbsp; }

&nbsp; refundPayment(user, transactionId) {

&nbsp;   /\* ... \*/

&nbsp; }

}





class AuthenticationService{

    /\* ... \*/

}



class UserManager {

   constructor() {

&nbsp;   this.emailService = new EmailService();

&nbsp;   this.paymentService = new PaymentService();

&nbsp;        //more

&nbsp; }

}





##### Deeply Nested Conditionals – Complex if/else trees that make code harder to follow.

###### Bad code

function ship(order) {

&nbsp; if (order) {

&nbsp;   if (order.address) {

&nbsp;     if (order.address.country === 'USA') {

&nbsp;       if (order.total > 50) {

&nbsp;         return 0;

&nbsp;       } else {

&nbsp;         return 10;

&nbsp;       }

&nbsp;     } else {

&nbsp;       return 25;

&nbsp;     }

&nbsp;   }

&nbsp; }

}



###### Refactored code



const SHIPPING = {

&nbsp; FREE\_THRESHOLD: 50,

&nbsp; USA\_RATE: 10,

&nbsp; INTERNATIONAL\_RATE: 25,

};



function ship(order) {

&nbsp; // Guard clauses

&nbsp; if (!order || !order.address) return 0;



&nbsp; const isUSA = order.address.country === 'USA';

&nbsp; const qualifiesForFree = order.total > SHIPPING.FREE\_THRESHOLD;



&nbsp; if (isUSA \&\& qualifiesForFree) return 0;

&nbsp; if (isUSA) return SHIPPING.USA\_RATE;



&nbsp; return SHIPPING.INTERNATIONAL\_RATE;

}





##### Commented-Out Code – Unused code that clutters the codebase.

###### Bad code



const SHIPPING = {

  FREE\_THRESHOLD: 50,

  USA\_RATE: 10,

  INTERNATIONAL\_RATE: 25,

};



function ship(order) {

  // Guard clauses

  if (!order || !order.address) return 0;



  const isUSA = order.address.country === 'USA';

  const qualifiesForFree = order.total > SHIPPING.FREE\_THRESHOLD;



  if (isUSA \&\& qualifiesForFree) return 0;

  if (isUSA) return SHIPPING.USA\_RATE;



  return SHIPPING.INTERNATIONAL\_RATE;

}







//old code for reference

/\*

function ship(order) {

  if (order) {

    if (order.address) {

      if (order.address.country === 'USA') {

        if (order.total > 50) {

          return 0;

        } else {

          return 10;

        }

      } else {

        return 25;

      }

    }

  }

}

\*/







###### Refactored code

const SHIPPING = {

  FREE\_THRESHOLD: 50,

  USA\_RATE: 10,

  INTERNATIONAL\_RATE: 25,

};



function ship(order) {

  // Guard clauses

  if (!order || !order.address) return 0;



  const isUSA = order.address.country === 'USA';

  const qualifiesForFree = order.total > SHIPPING.FREE\_THRESHOLD;



  if (isUSA \&\& qualifiesForFree) return 0;

  if (isUSA) return SHIPPING.USA\_RATE;



  return SHIPPING.INTERNATIONAL\_RATE;

}







##### Inconsistent Naming – Variable names that don't clearly describe their purpose.

###### Bad code

function calc(u, p) {

&nbsp; const t = p \* 1.1;

&nbsp; return t;

}





###### Refactored code



const TAX\_RATE = 0.1;



function calculateTotalWithTax(user, price) {

&nbsp; const total = price \* (1 + TAX\_RATE);

&nbsp; return total;

}





### Reflections

##### What code smells did you find in your code?

###### Magic Numbers \& Strings 

magic numbers like tax percentage or other hard coded variables/strings that is not self-explanatory.



###### Long Functions

Functions that have many steps that can be broken down into clear separate functions



###### Duplicate Code 

Having the same exact code in more than one or two (depending on length of code) place in your code. 



###### Large Classes (God Objects) 

Classes that are able to do too many things. We should split it into different classes each with their own 



###### Deeply Nested Conditionals 

Code that has a lot of layers of if-else or other conditional statements. 



###### Commented-Out Code

Code that is commented out and provides no real purpose



###### Inconsistent Naming 

Variable names that are not clear



##### How did refactoring improve the readability and maintainability of the code?

###### Magic Numbers \& Strings 

no more magic numbers, code is more clear as the variables have meaning. There is less time needed to understand code and less confusion. 



###### Long Functions

Functions that are too long are too complex. Now they are in bite-size functions, each with a specific feature. It will be easier to understand and editing/debugging code will be easier. It will also be easier to test smaller functions.



###### Duplicate Code

When you need to change a code, we only need to change it at one place. Dont have to change every instance of it. Easier to maintain.



###### Large Classes (God Objects)

Large classes are too hard to handle. Debugging is hard as there are too many things included. 



###### Deeply Nested Conditionals

Deeply nested conditionals are hard to look it. It can be quite confusing and repetitive if there is a lot. 



###### Commented-Out Code 

Commented out code is an eyesore. It provides no purpose to the code and is just clutter. Easier to read without.



###### Inconsistent Naming 

Inconsistent naming provides unclear variable names that will cause confusion and excess time needed to understand or improve on. 





##### How can avoiding code smells make future debugging easier?



It will be easier to understand code with proper names, no duplicate code makes making edits easier as you dont need to change in numerous places, long functions are split to smaller for easier testing and more clearer modifications without affecting other features of code. Large and overcomplicated classes dont exist, they are tying up different features with the same class, coupling them together when they can be separate, easier to debug without affecting other parts of code. 







