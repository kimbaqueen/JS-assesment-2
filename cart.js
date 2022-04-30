///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const tax = 0.06;
const couponValue = 0.2;

const calcFinalPrice = function (cartTotal, couponValue, tax) {
    return cartTotal = (summedPrice + (summedPrice * tax)) - (summedPrice * couponValue);
};
console.log(calcFinalPrice(summedPrice, couponValue, tax));

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    Customer Object properties:
    -name ('string' names can vary widely and strings offer flexibility): for lookups needed, categorizing, customization of greetings/communications
    -username('string' flexibility for creation): so they can create a login & potentially earn rewards. repeat customer!
    -password('string' flexibility): similar to username reasons, but also add security/safety/credibility
    -email('string' flexibility): so that we may send out marketing/promotions 
    -birthday('string' but with a space in between month/day in case we ever want to break it out for data): so that we may email out a birthday coupon and greeting
    -zipcode(number, for accuracy and because these are set as static numbers): to get a gauge where your maket is coming from, helpful for other feature like delivery options.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = {
    name: 'Kim Starr',
    username: 'kstarr',
    password: 'secret123',
    email: 'kimstarr@email.com',
    birthday: 'Dec 23',
    zipcode: 84109
};

console.log(customerObject);