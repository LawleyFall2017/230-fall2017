# "GIF Finder" JavaScript Application

*GIF Finder* will utilize the [Giphy web service](https://developers.giphy.com/docs/) to search for GIFs based on keywords, and then display the results to the user. (Make sure you've completed the [Web Services exercise](js9-webservices.md) before attempting this application.)

Here's how the app will work:
  1. The user types in a search term and hits return.
  1. The app createsa properly formatted request URL, including the search term(s), and sends it via http to the web service.
  1. The web service responds by sending back the requested data as a JSON (JavaScript Object Notation) formatted file (this is essentially an object literal containing just data, no methods). 
  1. The app parses the JSON data and displays the results to the user.

## Screen Shots

### Starting State:
![Web Page](gif-finder-1.jpg)

### And after the user has made a search:
![Web Page](gif-finder-2.jpg)

## Instructions

### I. Review of Web Service Terms

1. Web Service - http://en.wikipedia.org/wiki/Web_service - A Web service is a method of communication between two electronic devices over World Wide Web. A Web service is a software function provided at a network address over the web or the cloud; it is a service that is "always on" ...
2. API - http://en.wikipedia.org/wiki/Api - An application programming interface (API) specifies how some software components should interact with each other.
3. Query String - http://en.wikipedia.org/wiki/Query_string - In the World Wide Web, a query string is the part of a uniform resource locator (URL) that contains data to be passed to web applications such as CGI programs.
4. Arguments (or parameters) - http://en.wikipedia.org/wiki/Parameters_(computer_science) - In computer programming, a parameter is a special kind of variable, used in a subroutine to refer to one of the pieces of data provided as input to the subroutine.
5. API Key - http://en.wikipedia.org/wiki/API_key - An application programming interface key (API key) is a code passed in by computer programs calling an API (application programming interface) to identify the calling program, its developer, or its user to the Web site. API keys are used to track and control how the API is being used, for example to prevent malicious use or abuse of the API (as defined perhaps by terms of service).

### II. Get Started

Download the [gif-finder-files.zip](gif-finder-files.zip) archive. It contains the starting HTML, CSS, and image files for this project. 

#### A. Explanation

Open the gif-finder.html file and look for the numbered comments:

- In #1 we are hooking up a button event handler in the `window.onload` event. Note we have wrapped the code in an arrow function - we also could have used a regular function - it doesn't matter either way.
- In #2 we will store what the user searched for. It must be in the script scope so that we can access it from outside of our `getData()` function.
- In #3, `getData()` will be called when the button is clicked.

Test the code by clicking the button - and then check the console for the log.

### III. Capture the user intent and format a URL
We need to write code to build a URL to the web service. This URL will contain the users search preferences (search term and number of results).

**Type this code in:**

![Web Page](gif-finder-3.jpg)

#### A. Explanation
- #1 above - this URL is the Giphy *Search endpoint*. Here's an example of another endpoint, the Giphy "Trending" endpoint: `https://api.giphy.com/v1/gifs/trending`
- #2 above - this API key identifies you to the owner of the service. API keys are used to track and control how the API is being used - so if the user of this key is abusing the service it can be "turned off". This particular key is a public key and may no longer work when you do the exercise. If it does not, head here to get your own key (it's free!): https://developers.giphy.com/docs/
- #3 above - we specify a parameter - `api_key` - and then give it a value
- #4 above - get the `.value` of the text input field
- #5 above - get rid of leading an trailing spaces. URLs do not work with spaces!
- #6 above - `encodeURIComponent()` will escape characters like spaces (in the middle of the search term), ampersands, $ signs, + symbols and so on so that they are properly represented for a URL. You can read the docs here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
- #7 above - bail out if we have nothing to search for
- #8 above - add the search term to the url - the web service requires this parameter name to be `q`
- #9 above - grab the value of the &lt;select>, and then add the `limit` parameter to the url. Note that parameters are formated as `name=value` and separated by ampersands.
- #10 above - update the UI with the user's search term
- #11 above - finally! log out the URL.

### IV. Testing the URL

- Run the code and click the button. Now head to the console and click on the completed URL, it should open a new browser window that will show you the results of the API request. (If nothing happens, check that your code is correct, and/or copy/paste the URL to a browser location box)

#### A. After clicking the search button, you should see the URL in the console

![Web Page](gif-finder-4.jpg)

#### B. Clicking on the link opens a web page that shows the JSON response to your search. 

- You can see that you are getting back a JS Object literal, and there is a top-level property named `data` that contains an array of objects. Each of these objects represents a animated GIF on Giphy - note some of the properties that will come in handy: `url`, `rating`, `width`, `height` and so on.

- If your JSON isn't as nicely formatted as mine, it's because I am using the Chrome JSON Viewer extension which you can get here: https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

![Web Page](gif-finder-5.jpg)

#### C. Modify the URL in the location box

Below we changed the `q` parameter to `dogs` and the `limit` parameter to `2`

![Web Page](gif-finder-6.jpg)

#### D. Modify the API key value
If you do that, oops, you will probably get an error message (unless it is a valid API key)

![Web Page](gif-finder-7.jpg)

### V. Importing jQuery
To download the data, we are going to use the jQuery library and the `jQuery.ajax()` method. *Ajax* in this context means to asynchronously download data from the Internet.

We will be talking about jQuery and jQueryUI in more detail next week. For now, we'll simply use it as a tool to accomplish this task.  

A. To import the jQuery library, we will reference it through the <a href="https://developers.google.com/speed/libraries/">Google Hosted Libraries CDN</a>.  Add this script to the head of your document: 

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`

B. Now add this code to the bottom of `getData()`:

```javascript
console.log(jQuery);
console.log($); // $ is an alias to the jQuery object
```

C. Reload the app and click the search buttonin the console log you should see something like this, which will confirm that jQuery is loaded:

![Web Page](gif-finder-8.jpg)


### VI. Downloading the data with `jQuery.ajax()`

#### A. Using jQuery's AJAX object to download the data from that URL.

Add this code to the bottom of `getData()`, 

```javascript
$.ajax({
	dataType: "json",
	url: url,
	data: null,
	success: jsonLoaded 
})
```
![Web Page](gif-finder-9.jpg)


#### B. Create the callback function
**This code is the callback function - place it *outside* of `getData()`:**

![Web Page](gif-finder-10.jpg)

#### C. Explanation
- #12 above - we call the `jQuery.ajax()` method and pass in a *configuration object* that contains method parameters most importantly the **url** we want to download, the **datatype** (JSON), and the function that is called once the data is loaded (the *callback function*).
- #13 above - is a reference to `jsonLoaded`, which is the callback function we just created. 
- #14 above - he is the `jsonLoaded()` function - note that it takes a parameter `obj` - which is the JSON we got back from the Giphy web service.

#### D. Run the app and click the search button 
You should see the JSON we download in the console:

![Web Page](gif-finder-11.jpg)

### VII. Formatting the results for the user

Now we just need to take the results, loop through them, and create some HTML. Here's the code you need to add to `jsonLoaded()`:

![Web Page](gif-finder-12.jpg)

Go ahead and run the code, the app should pretty much look like the second screenshot at the top of this page.

One more thing - to get the fading working properly, add this line of code to the bottom of `getData()`:

`$("#content").fadeOut(100);` 


#### A. Explanation
- In #15 above - if there are no results (an empty array or error) we bail out of parsing and notify the user.
- In #16 above - here we grab the array of results, and create `bigString`, which will be a big blob of HTML that we will eventually put into the `#content` &lt;div>
- In #17 above - start the loop
- In #18 above - we grab the URL to the GIF that we are going to use with an &lt;img> tag
- In #19 above - grab the main Giphy page URL, which we will later put in a link
- In #20 above - `line` is going to be all of the HTML for a single result - in this case the title of the GIF, its URL, and its page link wrapped inside of a &lt;div>. We are doing this here using ES6 String Templates.
- In #21 above - the commented out version used string concatenation.
- In #22 above - add a single result to `bigString`
- In #23 above - add everything to the `#content` &lt;div>
- In #24 above - here we use the jQuery `fadeIn()` method to fade the content in over 1/2 a second. You can read about this method here: http://api.jquery.com/fadein/


### VIII. Wrap up
When it's done, upload your completed gif-finder.html file to your igme230 folder on banjo.rit.edu, and link to it from your main class page as "GIF Finder Exercise" It must be completed by 11:59pm on Sunday, November 5. 





