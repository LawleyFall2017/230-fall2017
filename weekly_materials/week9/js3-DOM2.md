# Introduction to JavaScript 3: More Web DOM Methods

In this exercise, we are going to look at alternatives to `.innerHTML` that can be used to **"CRUD"** (i.e. Create, Read, Update, Delete) HTML elements in the web browser and update elements on the page. 

Although we can do quite a bit with the `.innerHTML` property, there are times that we might want to insert a new element somewhere on the page, or delete a specific element. To do these things, we need more control over the page than the `.innerHTML` property gives us.

**Table of Contents**
* [Understanding the DOM](#understanding-the-dom)
* [New DOM Methods](#new-dom-methods)
* [Starter Page](#starter-page)
* [Creating and Appending Elements](#creating-and-appending-elements)
* [Creating and Appending Elements (with a little less code)](#creating-and-appending-elements-with-a-little-less-code)
* [Inserting Elements Into the Middle of a DOM Tree](#inserting-elements-into-the-middle-of-a-dom-tree)
* [Modifying Existing DOM Elements](#modifying-existing-dom-elements)
* [Removing Existing DOM Elements](#removing-existing-dom-elements)
* [Important Notes](#important-notes)
* [Review Questions](#review-questions)
* [Deliverable](#deliverable)


## Understanding the DOM
The [browser DOM is an inverted tree structure](https://www.w3schools.com/js/js_htmldom_navigation.asp) that consists of *nodes* - which are mostly HTML elements (software *objects*) that have properties and methods associated with them. These nodes have hierarchical relationships with one another - *parent*, *child*, and *sibling*. 

In this exercise, we will learn how to create new DOM elements and insert them anywhere into the DOM tree.

![Web Page](more-dom-0.jpg)

## New DOM Methods
Here are some of the new DOM methods we will be working with in this exercise. These allow us to *create* DOM elements, *modify* them, *insert* them into the document, and *delete* them from the document (you can click on any of them to see the relevant MDN documentation):

- [`document.createElement(elementName)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`document.createTextNode(text)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
- [`element.getAttribute(attributeName)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
- [`element.setAttribute(attributeName,attributeValue)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [`element.appendChild(anotherElement)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [`element.insertBefore(referenceElement,anotherElement)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- [`element.removeChild(anotherElement)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [`element.replaceChild(oldElement,newElement)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
- [`element.hasChildNodes()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes)

And some properties:

- [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)
- [`element.parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)
- [`element.children`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)

## Starter Page

Create a new document called more-dom-1.html, and paste the following code into it: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>More DOM 1</title>
	<style>
		body{border:1px solid gray;}
	</style>
</head>
<body>
<h1>My Page</h1>
<h2>Info</h2>
<p>Blah <b>Blah</b> Blah</p>
<h2>Links</h2>
<ul>
	<li><a href="http://www.apple.com">Apple</a></li>
	<li><a href="http://www.google.com">Google</a></li>
</ul>

<script>

</script>
</body>
</html>
```

It should look like this in the browser: 

![Web Page](more-dom-1.jpg)

## Creating and Appending Elements
Our page is missing a &lt;footer>, so let's create one and insert it into the page. Add the script shown below to the HTML document, just above the closing &lt;/body> tag:

```html
<script>
	// 1 - Create a <footer> element
	let footer = document.createElement("footer");
	
	// 2 - set the title attribute, which gives us a tooltip 
	footer.setAttribute("title","Don't copy this page without my permission!");
	
	// 3 - create the text of the <footer>
	let textNode = document.createTextNode("© 20XX by Ima Student");
	
	// 4 - insert the text into the <footer> element
	footer.appendChild(textNode);
	
	// 5 - insert the <footer> at the end of the <body>
	document.body.appendChild(footer);
</script>
```

**Load the page into a browser; you should now see the new &lt;footer> at the bottom of the page, and the tooltip effect!:**

![Web Page](more-dom-2.jpg)

## Creating and Appending Elements (with a little less code)

We can simplify this code though, by using `.innerHTML` instead of `document.createTextNode()`, and other changes. Create a new file called more-dom-2.html and paste the following code into it (or, if you prefer, edit your existing more-dom-1.html file to include the revised script). 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>More DOM 2</title>
	<style>
		body{border:1px solid gray;}
	</style>
</head>
<body>
<h1>My Page</h1>
<h2>Info</h2>
<p>Blah <b>Blah</b> Blah</p>
<h2>Links</h2>
<ul>
	<li><a href="http://www.apple.com">Apple</a></li>
	<li><a href="http://www.google.com">Google</a></li>
</ul>

<script>
	// 1 - Create a <footer>
	let footer = document.createElement("footer");
	
	// 2 - set the title attribute, which gives us a tooltip 
	footer.setAttribute("title","Don't copy this page without my permission!");
	
	// 3 - create the text of the <footer>
	let textNode = document.createTextNode("© 20XX by Ima Student");
	
	// 4 - insert the text into the <footer>
	footer.appendChild(textNode);
	
	// 5 - insert the <footer> at the end of the <body>
	document.body.appendChild(footer);
	
	// 6 - this code does the same thing as #1-#5 above, without having to use
	// document.createTextNode() or element.setAttribute()
	
	// add another <footer>, with less code!
	let footer2 = document.createElement("footer");
	footer2.title = "Don't copy this page without my permission!";
	footer2.innerHTML = "&copy; 20XX by Ima Student"
	document.body.appendChild(footer2);
	
</script>
</body>
</html>
```

**Load the page into a browser, you should now see the second &lt;footer>:**

![Web Page](more-dom-3.jpg)


## Inserting elements into the middle of a DOM tree
Rather than just append everything to the bottom of the page, let's try adding elements to both the end and the middle of an unordered list.

Create a new file called more-dom-3.html, and paste the following code into it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>More DOM 3</title>
	<style>
		body{border:1px solid gray;}
	</style>
</head>
<body>
<h1>My Page</h1>
<h2>Info</h2>
<p>Blah <b>Blah</b> Blah</p>
<h2>Links</h2>
<ul>
	<li><a href="http://www.apple.com">Apple</a></li>
	<li><a href="http://www.google.com">Google</a></li>
</ul>

<script>
	// 1 - Create a <footer>
	let footer = document.createElement("footer");
	
	// 2 - set the title attribute, which gives us a tooltip 
	footer.setAttribute("title","Don't copy this page without my permission!");
	
	// 3 - create the text of the <footer>
	let textNode = document.createTextNode("© 20XX by Ima Student");
	
	// 4 - insert the text into the <footer>
	footer.appendChild(textNode);
	
	// 5 - insert the <footer> at the end of the <body>
	document.body.appendChild(footer);
	
	// 6 - this code does the same thing as #1-#5 above, without having
	// to use document.createTextNode() or element.setAttribute()
	
	// add another <footer>!
	let footer2 = document.createElement("footer");
	footer2.title = "Don't copy this page without my permission!";
	footer2.innerHTML = "&copy; 20XX by Ima Student"
	document.body.appendChild(footer2);
	
	// 7 - create a new <li> and insert it into the end of the <ul>
	let listItem = document.createElement("li");
	listItem.innerHTML = "GeoCities";
	
	let unorderedList = document.querySelector("ul");
	unorderedList.appendChild(listItem);
	
	// 8 - create a new <li> and a new <a>
	// 8A - create an <li> with a link in it
	let fbListItem = document.createElement("li");
	let link = document.createElement("a");
	link.innerHTML = "Facebook";
	link.href = "http://www.facebook.com";
	fbListItem.appendChild(link)
	
	// 8B - get a reference to the google list item
	let googleListItem = document.querySelector("ul li a[href*='google.com']").parentNode;
	
	// 8C - insert the Facebook link before the Google list item
	unorderedList.insertBefore(fbListItem,googleListItem);
	
</script>
</body>
</html>

```

### Understanding the New Code in Items 7 and 8 

- Item 7 creates a new &lt;li> with the text "GeoCities" and appends it to the end of the list.
- Item 8A creates a new  &lt;li> and a new "Facebook" &lt;a>, and appends the &lt;a> to the &lt;li>
- Item 8B gets a reference to the "Google" &lt;li> (note the use of the CSS attribute selector and the `.parentNode` property)
- Item 8C inserts the "Facebook" &lt;li> *before* the "Google" element


**Load the page into a browser, you should now see the 2 new list items, one of which is a functioning link to Facebook:**

![Web Page](more-dom-3.jpg)


## Modifying Existing DOM Elements

Modifying the properties and styles of existing DOM elements is also easy. Add the following code to the end of the more-dom-3.html script:

```javascript
// 9 - Modify the google link's href
let googleLink = document.querySelector("ul li a[href*='google.com']");
googleLink.href = "http://www.bing.com";
```

Reload the page and click the Google link - it should now send you to www.bing.com (please don't tell Google about this, as they might come after us!)

You can also open up the web inspector to verify that the value of the Google link's href is now `http://www.bing.com`


## Removing Existing DOM Elements

Removing DOM elements is also easy. Add the following to the end of the script in more-dom-3.html:

```javascript
// 10 - Delete the paragraph
document.body.removeChild(document.querySelector("p"));
```

Reload the page - the paragraph is now gone. You can also see this in the Web Inspector. 

## Important Notes
In the previous document we used `.innerHTML` to create new HTML elements, while in this document we were more *methodical* (literally) and used methods such as `document.createElement()`, `document.createTextNode()`, `element.appendChild()`

Which approach should you use in your code? Our recommendation is to use whichever approach works for you. Consider:
- `.innerHTML` is simpler in many use cases, but in some applications you will be doing a lot of string concatentation, which can sometimes be problematic. ES 6 String templating can lighten the load though.
- the "DOM element creation" approach we used here can result in **more code** to write, to debug, and to maintain. 


## Review Questions

You may want to refer back to the [W3 HTML DOM page](https://www.w3schools.com/js/js_htmldom_navigation.asp) discussed at the beginning of this tutorial.

1. Exactly how many *parent* elements can an element on a web page have?
1. What are the *child* elements of the &lt;ul> tag in **more-dom-3.html**?
1. What is the *first-child* of the &lt;ul> tag in **more-dom-3.html**?
1. What is the *last-child* of the &lt;ul> tag in **more-dom-3.html**?
1. What is the *next-sibling* of the "Google" &lt;li> tag in **more-dom-3.html**?
1. What is the *previous-sibling* of the "Google" &lt;li> tag in **more-dom-3.html**?
1. What is the *first-child* of the "Google" &lt;li> tag in **more-dom-3.html**?
1. What is the *parent* of the "Google" &lt;li> tag in **more-dom-3.html**?

## Deliverable

Here is your starter code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>JavaScript Exercise 3</title>
	<style>
		body{border:1px solid gray;}
	</style>
</head>
<body>
<h1>My Favorites</h1>
<h2>My Favorite Colors</h1>

<ol id="colorsList">
	
</ol>

<h2>My Favorite Foods</h1>

<ol id="foodsList">
	
</ol>

<h2>My Favorite Links</h1>

<ol id="linksList">
	
</ol>

<script>
let colors = ["red","green","blue","purple","pink"];
let foods = []; // add some foods

// Optional - can you figure out how to pull the key
// and value from the links object literal?
let links = {
		"RIT": "http://www.rit.edu",
		"RWAG" : "https://www.facebook.com/RWAGclub",
		"New Media Club" : "http://newmediaclub.cias.rit.edu"
	}

</script>
</body>
</html>
```

1. Create a new file called javascript3.html, using the code shown above.
1. Add your favorite colors and foods to the arrays. If you would rather change the theme of the page to movies, music, books or similar, feel free.
1. Write code that loops through the `colors` array, generates list items, and appends them to the appropriate list element. For this array use a classic `for` loop.
1. Write code that loops through the `foods` array, generates list items, and appends them to the appropriate list element. For this array use an ES6 `for...of` loop.
1. Be sure that your code uses `document.createElement()` to create each element.
1. Optional (to challenge yourself): add your favorite web sites to the `links` object literal, and then loop through the object, pulling out both the *key* and the *value*, and using them to generate functioning links that are added to the last &lt;ol> on the page. The JavaScript `for...in` loop will probably get the job done.

**Your final version should look like this, except with your favorites (whatever they are):**

![Web Page](more-dom-5.jpg)

When you're done, upload the javascript3.html file to banjo.rit.edu, and link to it from your 230 page. It should be completed by 11:59pm on Saturday, October 28.
