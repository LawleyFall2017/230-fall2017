# Week 10 Tuesday Exercise (4 April 2017): Javscript Event Listeners

At the end of this exercise, you should have uploaded your completed hp-calculator.html file to a week10 folder in your igme230 folder on banjo. 

## Overview & Goals
Last week we did some basic Javascript programming, changing the content and attributes of HTML and CSS elements, and performing simple calculations. We also used one JavaScript event, onload, to make sure our scripts didn't run until the page had finished loading. Today we'll take that a bit further, focusing on other browser events that can trigger javascript operations, and some more complex number-handling functions. We'll use these to implement a calculator that takes a set of Harry Potter currency (galleons, sickles, and knuts) and calculates their value in British pounds. 

You'll find these pages helpful: 

* [W3Schools page on HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp) for a list of valid event handlers
* [W3Schools page on JavaScript Numbers](https://www.w3schools.com/jsref/jsref_obj_number.asp) for a list of number-handling functions.
* [W3Schools page on JavaScript Operators](https://www.w3schools.com/jsref/jsref_operators.asp) for calculation operators

## Part 1 - Setting Up
Create an HTML file called hp-calculator.html, and put it in a folder called week10. Paste the following code into the file: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Harry Potter Calculator</title>
	<link href="http://fonts.googleapis.com/css?family=Spirax" rel="stylesheet" type="text/css">
	<link href="hp-styles.css" rel="stylesheet" type="text/css">

		<script>
		window.onload = init;
		
		function init(){
			console.log("init called");

			calculate();
		}
		
		function calculate(){
			console.log("calculate called");
		}
	</script>
	
</head>
<body>
	<header><h1>Harry Potter Calculator</h1></header>
	<aside>
	<h2>Approximate<br>Exchange<br>Rate</h2>
	<p>1 bronze Knut = £0.01<br>

	1 silver Sickle = £0.29<br>

	1 gold Galleon = £5.00<br>
	</p>
	</aside>
	<section>
		<article>
			<p><q>The gold ones are Galleons. Seventeen silver Sickles to a Galleon and twenty-nine Knuts to a Sickle, it's easy enough.</q> - Rubeus Hagrid</p>
			<p>Therefore 1 Galleon = 17 Sickles = 493 Knuts.</p>
		</article>
		
		<article id="calculator">
			<h2>Calculator</h2>
			<p>
				Galleons: <input type="text" id="galleons" value="5" />
				Sickles: <input type="text" id="sickles" value="0" />
				Knuts: <input type="text" id="knuts" value="0" />
			</p>
			<p id="results">Results:  £0.00</p>
	</article>
	</section>

	<footer><a href="http://www.hp-lexicon.org/wizworld/money.html">Source: http://www.hp-lexicon.org/wizworld/money.html</a></footer>
</body>
</html>
```

## Part 2: The calculate() function

We'll start by creating the calculate() function that adds the three numbers together. We did this last week with the simple calculator example. 

The function is already in the document, but all it currently does is post a message to the console so that you know the function has been called. 

Start by writing the statements to create variables for galleons, sickles, and knuts, using the same syntax that you used in last week's simple calculator. Here's the first one for you:

```javascript
var galleons = parseFloat(document.querySelector('#galleons').value);
if (isNaN(galleons)) galleons=0;
```

Now we need to calculate the total value of the currency entered into each field. However, unlike our simple calculator, we can't just add the three numbers together. First, we have to calculate their value in British pounds, using the exchange rates provided at [http://www.hp-lexicon.org/wizworld/money.html](http://www.hp-lexicon.org/wizworld/money.html). 

To get the total value in pounds, we need to multiply galleons by 5, sickles by 0.29, and knuts by .01, and add those three products together. (This can all be done in one line!)

Then, just as with our simple calculator, we assign the value to the results element, appending the appropriate currency symbol:

```javascript
document.querySelector('#results').innerHTML = "Results: &pound;" + pounds;
```

Load your document up and test it. (Make sure you have the JavaScript console showing so you can see any errors.) Once you've got it working, it should show "Results: £25", since the document has a value of 5 for galleons when it loads. 

That's a good start, but currency is typically shown with two decimal point values. We can easily accomplish that by using the toFixed() function, like this:

 ```javascript
pounds = pounds.toFixed(2);
```

(Make sure you add that line *before* writing out the results!)

Reload the document and test it; you should now see "Results: £25.00"

Of course, now there's another big problem--since the value is being calculated only when the page loads, there's no way for you to change the results!

### Part 3: Adding Event Listeners

We're not going to add a calculate button to this page. Instead, we want the results to update every time you change the number in any of the fields. To do that, we need to use event listeners that are triggered by page events. 

Three possible event listeners that you could use are onblur (which triggers when you leave a form field by tabbing out of it or clicking somewhere else), onchange (which triggers when you change a value), and onkeyup (which triggers after you've presesd and then released a key on the keyboard). 

Here's how you'd add an onchange event listener for the galleons value:

```javascript
document.querySelector('#galleons').onchange = calculate;
```

(It would also work to use `document.getElementById('galleons').onchange = calculate;`)

Add event handlers for each of the three fields. After you've gotten it to work, try using different event handlers to see how they change the behavior of the page. 

### Part 4: Submitting Your Work 

Once your calculator is working properly, upload your week10 folder to your igme230 directory on banjo. This assignment is due by the start of class on Thursday, 6 April. 
