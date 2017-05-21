# Week 10 Thursday Exercise (4 April 2017): Javscript Event Listeners

An introduction to using JavaScript for saving preferences using cookies.  

## Overview & Goals
You'll be recording information about a user's preferences on a web page, and then use that information the next time the page is loaded. To do that, we'll use JavaScript to take the information the user enters, save it to a cookie, and then read that cookie when the page is reloaded. Before you start, I recommend reading through this W3C page: https://www.w3schools.com/js/js_cookies.asp

## Part 1 - Setting Up
Create an HTML file called cookietest.html, and put it in the week10 folder. Paste the following code into the file: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Test</title>
	<link href="https://fonts.googleapis.com/css?family=Pavanam" rel="stylesheet">
	<style type="text/css">
		body {
			font-family: Pavanam, sans-serif;
		}

		div {
			padding: 1em;
			margin: 1em;
		}
	</style>

</head>
<body>
	<h1>Welcome, <span id="displayname">New User</span>!</h1>

	<p>This page will adapt to your preferences. Please answer the following questions:</p>

	<div>
        <label for="username">Your Name: </label>
        <input type="text" id="username" name="username">
    </div>

	<div>
		What color scheme would you prefer? 
        <ul>
			<li><input type="radio" name="colors" id="wb" value="wb">White with black text</li>
			<li><input type="radio" name="colors" id="gb" value="gb">Gray with black text</li>
			<li><input type="radio" name="colors" id="bg" value="bg">Black with gray text</li>
		</ul>
    </div>

	<button id="save">Save My Preferences</button>

	<script>
	function init() {

	}

	window.onload = init;
	
	
</script>


</body>
</html>
```

## Part 2: Changing the Page Based on User Input

We'll start with the non-cookie part of the exercise--we want the name at the top of the page, and the colors of the page, to change based on the radio button selected. In past exercises we've used JavaScript to change content and CSS properties based on user input, and we're doing the same thing here. 

We'll start with the "Name" input. As with the HP calculator, we want the "New User" text to change as our user enters their name. We'll call that function "nameChange()". Add this to your script tag, *after* the init function:

```javascript
function nameChange() {
	// find the value of the #username element, and assign it to a variable called newname
	var newname = document.getElementById('username').value; 
	// set the contents of the #displayname element to the value of newname
	document.getElementById('displayname').innerHTML = newname;
	}
```

For this to work, we need to call the nameChange function when the contents of the username input field changes. We can use either the onkeyup listener, as we did in the HP calculator, or we can use the onblur or onchange listeners. With onkeyup, the function will be called with each new character we add; with onblur or onchange, it won't be called until your cursor is outside of the field, either because you tabbed out, or clicked elsewhere. 

We're going to call the function in the input field itself, rather than in the script tag, like this:

```html
 <input type="text" id="username" name="username" onkeyup="nameChange()">
```

Now save your code, and reload the document. Try entering text into the input field; you should see the text at the top of the page change when your event listener (onkeyup, onchange, or onblur) is triggered. If it doesn't work, check the console for errors first, and if you're stuck, ask for help!

Once you've got the name change working, we'll move on to changing the page colors. 

We want to change the background-color and color attributes of the body of the page whenever a radio button is clicked. To do that, we can use the "onchange" event for radio buttons to call a function that changes the color values.

We'll start by creating the function that makes the changes. Add a new function after the init function in your script tag. This function will receive a value from the radio button, and we'll call that value "colorpref" for the purposes of this function. 

```javascript
colorChange(colorpref) {

}
```

In that function, we'll need an if/else if/else if statement to check what the value of colorpref is, and change the values for the body accordingly. Here's the first part of the function, which checks to see if it's the white/black color combination, changes colors, and sets that radio button as "checked". (We don't really need the last part now, but we'll want it when we start using cookies.)

```javascript
if (colorpref == "wb") {
	document.body.style.backgroundColor="white";
	document.body.style.color = "black";
	document.getElementById('wb').checked = true; 
}
```

Now add the two `else if` statements to the function to handle the other two possible color preferences. 

We can't test that function until we call it in some way, which we want to do when the user changes the value of a radio button. We can add an onclick attribute to each button, and use that to call the function and pass the correct variable to it, like this: 

```html
<li><input type="radio" name="colors" value="wb" id="wb" onclick="colorChange('wb')">White with black text</li>
```

Add the appropriate code to each of the three radio buttons. When you're done, save and reload the page, and test the buttons to see if they work. If everything was done properly, you should see the background and text color change each time you click a button. 

If it doesn't work, check the console to see if there's an obvious error. If you're stuck, ask for help!

Once you've got all the user input changes working properly, it's time to move on to saving those changes to a cookie for later re-use. 

### Part 3: Saving Data To a Cookie

***Note: Cookies won't work with local files, so you'll need to upload your HTML document to banjo in order to test whether your code is working. Every time you make a change, you'll need to remember to re-upload the modified file!***

The JavaScript command to create a cookie is pretty straightforward; you set document.cookie to a name/value pair, like this: `document.cookie = "name=value"`. 

In your script tag, add a savePrefs() function; we'll use that to store two cookies, one for the name entered into the text box, and one for the color combination chosen. 

Finding the current content of the #username element is pretty straightforward. We'll assign that value to a variable, and then use the variable as the value for a namePref cookie. Put these two lines  into your savePrefs() function:

```javascript
var savedName = document.querySelector('#username').value;
document.cookie = "namePref=" + savedName + "; path=/"; 
```

Saving the color settings is a little tricker, since we need to figure out which radio button is currently checked. Happily, the querySelector method allows us to find the checked value for a specific input, using both an attribute value and a pseudo class. In the first line of the function, you'll create a variable to hold the saved color from the currently-checked radio button. In the second line, you'll use that variable as the value for a colorPref cookie. Add these to your function:

```javascript
var savedColor = document.querySelector('input[name="colors"]:checked').value;
document.cookie = "colorPref=" + savedColor + "; path=/"; 
```

There's only one small problem we still need to address--if you didn't click a color button, you'll get an error on this function, because it looks for the checked value. 

To fix this, add the following line to your init function:

```javascript
document.getElementById('wb').checked = true;
```

Now we need to have the button on the page call the savePrefs function when it's clicked. We can do that in the HTML, like this:

```html
<button id="save" onclick="savePrefs()">Save My Preferences</button>
```

Upload your file to banjo, change the name and color scheme, and click the button. 

To see if your cookie values were properly stored, in Chrome you can go to Preferences-->Advanced Preferences-->Privacy-->Content Settings...-->All Cookies and Site Data. Search for "people.rit.edu". You should see a colorPref cookie and a namePref cookie. If you don't, ask for help! If you do, you're ready to move on to the last part of the exercise, reading the data from the cookie. 

### Part 4: Reading Data From a Cookie

The function we'll use for this is fairly complex, and I don't expect you to necessarily understand everything about how it works. (I took this one from W3Schools!) Go ahead and add this in your script:

```javascript
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
```
What this function is doing is retrieving a cookie with the name you pass in (cname), and then splitting the string apart into its separate components, so that the value can be extracted and returned back. Next week, when we start using JQuery, we'll have some easier ways to do this. 

Once the cookie values have been retrieved, we want to use them to change aspects of the page when it loads--for that, we'll add some code to the init function, which is called when the page loads.

First, we'll create a variable called user, and use the getCookie function to retrieve the value of the namePref cookie and assign it to that variable. Then we'll check to see if we successfully retrieved a value, and if so, change the name at the top of the page:

```javascript
var user = getCookie("namePref");
if (user != "") {
	document.getElementById('displayname').innerHTML = user;
} 
```
We'll use exactly the same approach to retrieve and apply the colorPref cookie value:

```javascript
var color = getCookie("colorPref");
if (color != "") {
	colorChange(color);
} 
```

Save your work, and upload it to banjo. Test it again. You should be able to save your preferences, reload the page, and have the changes be applied. 

### Part 5: Submitting Your Work 

Once your page is working properly, make sure you add a link for this file (and if you didn't already, for your hp-calculator.html file from Tuesday) to your main igme230 page. This assignment is due by 8am on Saturday, April 8th. 

