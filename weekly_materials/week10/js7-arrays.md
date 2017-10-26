# JavaScript Arrays

JavaScript arrays are "List-like" objects that are used to store information sequentially. 

Unlike primitive (Int, Float etc) arrays in languages like C, JavaScript arrays are NOT constrained to holding only one *type* of value, and can hold multiple types of data in the same array.

**Table of Contents**
* [Array Operations](#array-operations)
* [Iterating over Arrays](#iterating-over-arrays)
* [Other "Array-like" objects in JavaScript](#other-arraylike-objects-in-javascript)
* [Review Questions](#review-questions)
* [Deliverable](#deliverable)

<hr>

## Array Operations

### Create an Array
```javascript
// An array of strings
let colors = ["red","green","blue"];
console.log(`colors.length = ${colors.length}`); // 3

// an array of numbers
let numbers = [7.9, 5.9, 100.3];

// mixed typed
let collection = ["Jaberwocky", 42, 98.6, false, Date(), Math.sin, null];
```

### Access an Array item

```javascript
let first = colors[0]; // "red"
let last = colors[colors.length - 1]; // "blue"
```

### Add to the end of an Array

```javascript
colors.push("purple");
```

### Remove from the end of an Array

```javascript
last = colors.pop(); // remove "purple" from the end
```


### Remove from the front of an Array

```javascript
first = colors.shift(); // remove "red" from beginning
```


### Add to the front of an Array

```javascript
colors.unshift("red"); // add "red" back to the front
```

### Find the index of an item in the Array

```javascript
let pos = colors.indexOf("green");
```

### Remove 1 or more items by index position

```javascript
// remove 1 item
position = 2;
let numberToRemove = 1;
let removedArray1 = colors.splice(position, numberToRemove); // ["blue"]

// remove more than 1
position = 0;
numberToRemove = 2;
let removedArray2 = colors.splice(position, numberToRemove);  // ["red","green"]

console.log(`colors.length = ${colors.length}`); // 0
```                           

### Copy an item from an index position

```javascript
let fruits = ["apples","oranges","bananas"];
position = 0;
let numberToCopy = 2;
let copiedItems = fruits.slice(position,numberToCopy);

console.log(fruits); // ["apples","oranges","bananas"]
console.log(copiedItems); // ["apples","oranges"]
```

### Copy the whole array

Note: a shallow copy only copies object references

```javascript
let shallowCopy = fruits.slice();
console.log(shallowCopy); // ["apples","oranges","bananas"]

let car = {make:"Ford"};
let cars = [car];
let carsCopy = cars.slice();
console.log(car == cars[0] && cars[0] == carsCopy[0]); // true, all the same car
```

### Sample code for this section
#### array-operations.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Array Operations</title>
</head>
<body>

<script>
// A.
// An array of strings
let colors = ["red","green","blue"];
console.log(`colors.length = ${colors.length}`); // 3

// an array of numbers
let numbers = [7.9, 5.9, 100.3];

// mixed typed
let collection = ["Jaberwocky", 42, 98.6, false, Date(), Math.sin, null];

// B.
let first = colors[0]; // "red"
let last = colors[colors.length - 1]; // "blue"

// C.
colors.push("purple");

// D.
last = colors.pop(); // remove "purple" from the end

// E.
first = colors.shift(); // remove "red" from beginning

// F.
colors.unshift("red"); // add "red" back to the front

// G.
let position = colors.indexOf("green"); // 1

// H.
// remove 1 item
position = 2;
let numberToRemove = 1;
let removedArray1 = colors.splice(position, numberToRemove); // ["blue"]

// remove more than 1
position = 0;
numberToRemove = 2;
let removedArray2 = colors.splice(position, numberToRemove); // ["red","green"]

console.log(`colors.length = ${colors.length}`); // 0

// I
let fruits = ["apples","oranges","bananas"];
position = 0;
let numberToCopy = 2;
let copiedItems = fruits.slice(position,numberToCopy);
console.log(fruits); // ["apples","oranges","bananas"]
console.log(copiedItems); // ["apples","oranges"]

// J
let shallowCopy = fruits.slice();
console.log(shallowCopy); // ["apples","oranges","bananas"]

let car = {make:"Ford"};
let cars = [car];
let carsCopy = cars.slice();
console.log(car == cars[0] && cars[0] == carsCopy[0]); // true, all the same car

debugger;

</script>
</body>
</html>
```

## Iterating over Arrays

### `for` loop

```javascript
for (let i=0; i<colors.length; i++){
	console.log(colors[i]);
}

for (let i=0; i<colors.length; i++){
	console.log(colors[i]);
	if (colors[i] == "red") break; // stop after "red"
}

for (let i=0; i<colors.length; i++){
	if (colors[i] == "red") continue; // skip "red"
	console.log(colors[i]);
}
```

### `for...of` loop

```javascript
for (let color of colors){
	console.log(color);
	// we can also use break and continue
}
```

### `Array.forEach()`

`.forEach()` is a method of Array - we pass it a function that will be called on every member of the array.
One disadvantage of `.forEach()` is that you can not break out of the loop early.

```javascript
colors.forEach(function(item, index, array) {
  console.log(item, index);
});
```

### `Array.map()`

The `map()` method creates a new array that contains the results of calling the passed in function on every element in the original array.

```javascript
let numbers = [1,2,3,4];
let doubleIt = function(num){return num * 2};
//let doubleIt = num => num * 2; // same thing as an arrow function
let newArray = numbers.map(doubleIt); // [2,4,6,8]

```

### `Array.filter()`
The `filter()` method creates a new array with all elements that pass the test (i.e return `true`) implemented by the provided function.

```javascript
let evenOnly = function(num){return num % 2 == 0};
//let evenOnly = num => num % 2 == 0; // same thing as an ES6 arrow function
let filteredArray = numbers.filter(evenOnly); // [2,4]
```

### Sample code for this section
#### array-iteration.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Array Iteration</title>
</head>
<body>

<script>
let colors = ["red","green","blue"];

// A
for (let i=0; i<colors.length; i++){
	console.log(colors[i]);
}

for (let i=0; i<colors.length; i++){
	console.log(colors[i]);
	if (colors[i] == "red") break; // stop after "red"
}

for (let i=0; i<colors.length; i++){
	if (colors[i] == "red") continue; // skip "red"
	console.log(colors[i]);
}

// B
for (let color of colors){
	console.log(color);
	// we can also use break and continue
}


// C
colors.forEach(function(item, index, array) {
  console.log(item, index);
});

// D
let numbers = [1,2,3,4];
let doubleIt = function(num){return num * 2};
//let doubleIt = num => num * 2; // same thing as an ES6 arrow function
let newArray = numbers.map(doubleIt); // [2,4,6,8]

// E
let evenOnly = function(num){return num % 2 == 0};
//let evenOnly = num => num % 2 == 0; // same thing as an ES6 arrow function
let filteredArray = numbers.filter(evenOnly); // [2,4]

debugger;
</script>
</body>
</html>

```


## Other "Array-like" objects in JavaScript
### `NodeList`

When we use `document.querySelectorAll()`, we get back a `NodeList`.

- https://developer.mozilla.org/en-US/docs/Web/API/NodeList

NodeLists are NOT arrays. Although they have a `.length` property and can use `for...of` and `.forEach()`, they CAN not use other array methods like `.filter()` or `.map()`.

```javascript
let allNodes = document.querySelectorAll("*"); // returns a NodeList object

for (let i=0;i<allNodes.length;i++){
	console.log(allNodes[i]); // works fine
}

for (let node of allNodes){
	console.log(node); // works fine
}

allNodes.forEach(function(item, index, array) {
  console.log(item, index); // works fine on newer browsers
});

// NodeList does not have the .filter() method
let filteredArray = allNodes.filter(node => node.tagName == "BODY"); //FAIL!
```

### Typed Arrays

Typed arrays are fixed size arrays that hold only a single primitive tyope, such as a `UInt8` or a `Float64`. We probably won't use them in this class, and you can read about them here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays


### Sample code for this section
#### array-like-objects.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Array-like Objects</title>
</head>
<body>

<script>
// A
let allNodes = document.querySelectorAll("*"); // returns a NodeList object

for (let i=0;i<allNodes.length;i++){
	console.log(allNodes[i]); // works fine
}

for (let node of allNodes){
	console.log(node); // works fine
}

allNodes.forEach(function(item, index, array) {
  console.log(item, index); // works fine on newer browsers
});

// NodeList does not have the .filter() method
let filteredArray = allNodes.filter(node => node.tagName == "BODY"); //FAIL!

debugger;
</script>
</body>
</html>
```

## Review Questions
1. True or False. JavaScript Arrays may hold only a single *type* of value.
1. Which array operation adds an item to the *end* of an array?
1. Which array method can be used to *remove* items from an array?
1. Which array method can be used to *copy* items to a new array?
1. Describe 3 ways to loop through a JavaScript Array.
1. Does `Array.filter()` modify the old array (the one it is called on), or create a new array?
1. What is the type of the object that is returned by `document.querySelectorAll()`?

## Deliverable
You're going to create a simple pixel art application, using these instructions:

[Pixel Artist Application ](js7hw-pixel-artist.md)

When it's done, upload your completed pixel-artist.html file to your igme230 folder on banjo.rit.edu, and link to it from your main class page as "Pixel Artist Exercise". It must be completed by 11:59pm on Friday, November 3. 
