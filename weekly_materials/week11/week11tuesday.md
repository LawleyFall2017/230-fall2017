# Week 11 Tuesday Exercise (11 April 2017): Using jQuery

## Overview & Goals
Now that you have a basic understanding of how to implement JavaScript on a web page, we're going to take a look at a widely used JavaScript library, jQuery, that reduces the amount of JavaScript that you need to write yourself. 

You may find these pages helpful: 

* [W3Schools page on jQuery](https://www.w3schools.com/jquery/jquery_intro.asp)
* [jQuery's Tutorial Site](https://learn.jquery.com/)
* [jQuery Quick Reference](https://oscarotero.com/jquery/)

## Part 1 - Setting Up
Create an HTML file called jquery.html, and put it in a folder called week11. Paste the following code into the file: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Experiments</title>
</head>
<body>
    

	<script>

	</script> 
</body>
</html>
```

Go to the [Google Hosted Libraries](https://developers.google.com/speed/libraries/) site, and find the code snippet for the most recent version jQuery in your page (as of 10 April 2017, that's version 3.2.1). Add that just **above** (not inside) the `<script>` tag. 

For this exercise, to keep things simple, you'll be putting your JavaScript and jQuery calls into the script tag in the document. In general, however, just like CSS, it's good practice to keep your scripts in a separate .js file and call them with a `<script src="path/to/your/script.js"></script>` tag. 

## Part 2: Showing & Hiding Content With jQuery

We'll start with a simple example: showing and hiding content using buttons. 

Add this to the body of your document:

```html
<button id="show-btn">Show List</button>
<button id="hide-btn">Hide List</button>

<p>IGM Open Labs:</p>
<ul id="menu">
    <li>GOL 2000 (open lab) &amp; GOL 2025 (back of open lab)</li>
    <li>GOL 2530 (Streaming Control Lab) </li>
    <li>GOL 2550 (New Media Lab)</li>
</ul>
```

Now we need to add the functionality in our script for clicking on the buttons to show or hide the list. As a reminder, a jQuery calls involves the $ operator to invoke the jQuery library, a selector, and an action. So the jQuery instruction to hide the #menu element would look like this: 

```javascript
$("#menu").hide();
```

But we don't want that to happen when the page loads--we want it to happen when the user clicks the button labeled "Hide List". That means we need to put the jQuery instruction inside a function, and then bind the function to an event. 

Here's the function you'll need, using the jQuery hide method:

```javascript
function hideMenu() {
  $("#menu").hide();  
}
```

And here's how jQuery binds a function to an event:

```javascript
$("#hide-btn").click(hideMenu);
```

Add those to your `<script>` tag, and test your page. The hide button should work. If it doesn't, check the console for error messages, and if you can't figure out the problem, ask for help!

Once you have the hide button working, add the code for the show button. (You should be able to figure that out on your own--the show() method works the same way as the hide() method!)

### Part 3: Creating Sliding Panels With jQuery
Now you're going to add two new divs to the page. You'll put the menu inside of one, and add click behavior to the other to trigger the jQuery slide behavior. Do *not* delete your buttons or the scripts you just wrote for them; they should still function to hide and show the menu on the sliding panel. When you're done, your page should work like this: https://youtu.be/f1M2Zv29z-4

jQuery has some built-in methods that provide animation and transition effects. For instance, you can use it to slide elements up or down, or toggle between the two. 

Add this style information to the head of your document:

```css
<style> 
        #panel, #flip {
            padding: 5px;
            width: 300px;
            text-align: center;
            background-color: #e5eecc;
            border: solid 1px #c3c3c3;
            }
        #panel {
            padding: 50px 5px; 
        }
</style>
```

Then change your HTML for the list to this:

```html
<div id="flip">Click to Show or Hide Open Labs</div>
<div id="panel">
    <ul id="menu">
        <li>GOL 2000 (open lab) &amp; GOL 2025 (back of open lab)</li>
        <li>GOL 2530 (Streaming Control Lab) </li>
        <li>GOL 2550 (New Media Lab)</li>
    </ul>
</div>
```

We want the bottom panel to slide in and out each time the top div is clicked. 

Rather than creating a separate function for the slider behavior, we're going to call the slideToggle action inside of the click listener. The basic syntax will look like this: 

```javascript
$("selector").method(function() {
    $("selector").method("property");
});
```

***Note:*** Do not change the word "function" in that code. That is a key word that tells jQuery that we're adding instructions to be executed when the initial method is called. It works very much like defining a function outside of the method, except that you don't need to give this function a name. You will *only* be changing the selectors, methods, and property values. 

Add the necessary code to your `<script>` tag, replacing each of the selectors with the appropriate div, and the methods with the click listener and the slideToggle action. For the speed property on slideToggle, use "slow".

Test it to make sure it works. 


### Part 4: Submitting Your Work 

Once you've got the page working properly, upload your week11 folder to your igme230 directory on banjo, and link your completed page from your main igme230 page. This assignment is due by the start of class on Thursday, 13 April. 
