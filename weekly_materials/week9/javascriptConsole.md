# 2 - Introduction to JavaScript



## Hello, World!
As you probably know, Federal law requires that every programming tutorial begin with a "Hello World" application. (Okay, maybe that's not entirely true, but we're still going to do it!)

Create a new folder for today's exercise, and in it put a file called hello-1.html. Copy the following code into the document: 

```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <title>Hello-1</title>
   <script>
      console.log("Hello world!");
   </script>
</head>
<body>

</body>
</html>
```

Open the file in Chrome. The script doesn't display anything in the web browser window. Bring up the Chrome document inspector by right-clicking in the browser window and choosing **Inspect**. After that, choose the **Console** tab.

The `console.log()` function allows you to output content to the console rather than displaying it on the page. This can be very helpful when debugging your JavaScript code, since you can place these statements at key points to see where/when your code stops working properly. 

![The JavaScript Console](console-1.jpg)


## Using the Console to Run Commands
The console also contains an interactive interpreter where you can run JavaScript commands. At the prompt, type `Date()` to create and see a new date from the `Date` object, and `Math.random()` to get a random number from the `Math` object.

![The JavaScript Console](_images/console-2.jpg)

The general term for an interactive console like this is [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop) - "Read-Evaluate-Print-Loop".

*Note: Just as when we modify the CSS in the inspector, we're not really changing the file; we're just testing out what our code would do.*

## Declaring Variables and Constants
In pre-ES6 versions of JavaScript, variables were defined with the `var` keyword. In ES6, we can use the `const` keyword to declare constant values (that do not change), and the `let` keyword to declare variables. 

**We recommend that you NOT use the pre-ES6 approach of `var` to declare variables, as the variables that `var` declares are *scoped to functions*, rather than the *block scoping* of `let` and `const`, which introduces odd behavior. Read more here: https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70**

JavaScript is a *loosely typed* (aka *dynamic*) language. That means you don't have to declare the *type* of a variable ahead of time. The type will be determined automatically by the engine while the program is being run. 
That also means that the same variable can contain data of different types 

Create a new HTML file called hello-2.html, and paste the following code into it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <title>Hello-2</title>
   <script>
     console.log("Hello world!");
     const answer = 42;
     // string concatenation
     console.log("The answer to everything is " + answer); 
	
     let x = 1;
     let y = 1;
     let sum = x + y;
     // string templating (ES6 only)
     console.log(`${x} + ${y} is ${sum}`); 
   </script>
</head>
<body>
</body>
</html>
```

Load the file in Chrome. Again, you'll see nothing in the browser window, but in the console you should see this: 

![The JavaScript Console](console-3.jpg)

Some things to note about that code:
- When strings are added to numbers, we get back a concatenated string. 
- ES6 also allows [*String Templating*](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings), which is more powerful than simple string concatenation. Note the backtick (\`)  symbol is used to denote the string, and `${}` encloses the variable names.


## Console Error Messages
The console will display error messages that will help you debug your code. Let's produce an error by attempting to change the value of the `answer` constant above.
Add this line of code - `answer = 43;` - right before the closing &lt;script&gt; tag, and then reload the page. You should see an error in the console:

![The JavaScript Console](console-4.jpg)

That's because we defined `answer` as a constant rather than a variable. Fix this error by changing the declaration for `answer` to a variable rather than a constant.

## JavaScript "Primitive" Data Types
The five common built-in "primitive" data types in JavaScript are: `Number`, `String`, `Boolean`, `Undefined` (a value has never been defined) and `Null` (the intentional absence of a value).

ES6 has also added the `Symbol` type, which we probably won't need to use in this course.

Create a new file called hello-3.html, and paste the following code into it. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <title>Hello-3</title>
   <script>
     // 5 fundamental JavaScript types
     let sum = 99; // Number
     let name = "Fred"; //String
     let isLoggedIn = false; // Boolean
     let userName = undefined;
     let data = null;

     // We can later change what type a variable contains
     sum = "Joe"; // sum now contains a String
     name = 50; // name now contains a Number

     console.log(sum); // should output the string "Joe" to console

</script>
</head>
<body>
</body>
</html>
```
Save the file, open it in Chrome, and use the Inspector to view the console. You should see the string "Joe" output to the console. Make sure you understand why!

## JavaScript "Built-in" Objects
JavaScript also contains a number of built-in objects that we can use. There is `Object`, which is a starting point for our own customized objects, as well as `Array`, `Date`, `Math`, and others. The "primitive" types above also can be treated like objects and have properties and methods that can be called on them.

* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - A list of values
* [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - A list of name/value pairs
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - Represents a single moment in time
* [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) - A built-in object with properties and methods for mathematical operations

Objects have methods and properties that you can access with your code. For instance:
* [*obj*.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)- Returns a string representing the object.
* [*obj*.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) - Formats a number using fixed-point notation.
* * [*str*.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) - Returns the length of a string.


Create another file called hello-4.html, and paste the following code into it: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <title>Hello-4</title>
   <script>
     // Common JS Objects
     let colors = ["red","green","blue"]; // Array literal
     let person = {name:"Fred",age:20};   // Object literal
     let month = new Date().getMonth(); 
     let age = Math.round(20.999);

     console.log(colors[0]);
     console.log(person.name);
     console.log(month);
     console.log(age);

     // Treat "primitives" like objects
     let sum = 99.980809809;             // Number
     let name = "Fred";                  // String
     let isLoggedIn = false;             // Boolean
     let userName = undefined;
     let data = null;

     console.log(sum.toFixed(2)); // 99.98
     console.log(name.length); // 4
     console.log(isLoggedIn.toString()); // "false"

</script>
</head>
<body>
</body>
</html>
```
Load the file in Chrome and view the console. You should see seven values output, and they should match the values in the code comments. Make sure you understand how each of those values is being generated! 

## Outputting to the Page Rather Than the Console



## Important Notes! 

* The JavaScript `Number` can hold both a 64-bit number AND a 64-bit Integer - documentation on the finer points of this is here:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    - https://medium.com/dailyjs/javascripts-number-type-8d59199db1b6

* JavaScript has 2 zeros `+0` and `-0` -  you can read about that here: https://abdulapopoola.com/2016/12/19/why-javascript-has-two-zeros-0-and-0/

* JavaScript has a large number of **truthy** and **falsy** values that are *coerced* to `true` or `false` in a boolean expression or context. Check out these links, and see the code sample below:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
    - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    - https://developer.mozilla.org/en-US/docs/Glossary/Falsy

```javascript
// All of these are false values, except the last one - it turns out that "false" is true
console.log(0 == false ? "0 is false" : "0 is true");
console.log(-0 == false ? "-0 is false" : "-0 is true");
console.log(false == false ? "false is false" : "false is true");
console.log(null == false ? "null is false" : "null is true");
console.log(undefined == false ? "NaN is false" : "NaN is true");
console.log("" == false ? "\"\" is false" : "\"\" is true");
console.log('' == false ? "\'\' is false" : "\'\' is true");
console.log(new Boolean(false) == false ? "\"new Boolean(false)\" is false" : "\"new Boolean(false)\" is true");
console.log("false" == false ? "\"false\" is false" : "\"false\" is true");

/*
Basically, the first 8 values above are all coerced to *false* in a Boolean content. Everything else - like the string "false" for example, is coerced to *true*.
*/
```

## Review Questions
1. Which versions of JavaScript will we be covering in this course?
1. How can you get the interactive JavaScript [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop) to appear in Chrome?
1. Which JavaScript keyword declares *variables*?
1. Which JavaScript keyword declares *constants*?
1. What happens when you try to change the value of a previously declared *constant value*?
1. What are the 5 built-in JavaScript "primitive" data types?
1. What kinds of values can a `Number` type hold? (Google it)
1. Which of the following examples will evaluate to `true` in a boolean context?
    1. `undefined`, `null`, `false`, `0`, `""`, `''`
    1. `"undefined"`, `"null"`, `"false"`
    1. `"true"`
    1. `new Date()`
    1. `new Array()`
    

## Homework Exercise
Make a copy of **hello-4.html** and name it **javascript1.html**. Delete all of the existing  `console.log()` calls, and add JavaScript that does the following (search the web for documentation if you don't know how to do these; MDN and W3Schools both have good JavaScript documentation):

1. Use a method of the `Array` object to append another color to the end of the `colors` array.
1. Print out the last element in the `colors` array.
1. Loop through the `colors` array using a `for` loop and print out each value to the console.
1. Add a new property named `school` to the `person` object and give it a value of "RIT". Then print this value to the console.
1. Print out the number of seconds that have passed since 1970 - use the `Date` object.
1. Print out the value of pi - use the `Math` object.
1. Print out the absolute value of -999 - use the `Math` object.
1. Print out an "all caps" version of the string "Hello" - use a method of the `String` object.

When you're done, upload the file to banjo.rit.edu and link it from your main 230 page. It should be uploaded no later than 11:59pm on Wednesday, October 24. 