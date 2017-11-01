# Web Services

Reading and writing data to and from the Internet, whether to/from your own server, or by working with a cloud service like Firebase, is a BIG topic.

In this course, we are just going to scratch the surface and work with the "read only" web, in this case, by utilizing a web service to search for and display animated GIFs.

**Table of Contents**
* [What is a Web Service?](#what-is-a-web-service)
* [Retrieving Data from Web Services?](#retrieving-data-from-web-services)
* [Web Service Data Formats](#web-service-data-formats)
* [Important Notes](#important-notes)
* [Review Questions](#review-questions)


## What is a Web Service?

- A *Web Service* (http://en.wikipedia.org/wiki/Web_service) is a method of communication between two electronic devices over World Wide Web. A Web service is a software function provided at a network address over the web or the cloud; it is a service that is "always on" ...

- Web services (aka Web APIs) can be used to return informations such as the weather, mapping, nearby restaurants and other place information, photos & videos and so on. There are also services that let the developer store user data in "the cloud" where it will be available from any machine the user logs into (Google's Firebase is one such service). 

- Some examples of web services can be found on this page: [sample-web-services.md](../projects/_supporting-files/sample-web-services.md)


## Retrieving Data From Web Services

- As developers, what we want to do is this:
  - capture a user's intent (for example, *what's the weather in Rochester going to be today?*)
  - behind the scenes, exchange data with a remote server
  - update just a small part of the HTML page (asynchronously), without having to reload the entire page
- The above concept is known in the web world by this term - *Ajax* - https://en.wikipedia.org/wiki/Ajax_(programming)
- **Ajax** was derived from an earlier acronym *AJAX*, which stood for **A**synchronous **J**avaScript **A**nd **X**ML. The acronym fell out of favor because we now commonly retrieve other data formats besides XML.  

In this class we will simplify the process of retrieving remote data by using the `jQuery.ajax()` method of the jQuery library. This method will work well cross-platform, and abstracts away (for better or worse) the details of what's actually happening in the browser.

Behind the scenes, the actual browser APIs that are being used for Ajax by jQuery include these:

- `XMLHttpRequest` (XHR) - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- `Fetch` API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Cross-Origin Resource Sharing (CORS) - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- Cross-site scripting (XSS) can be used to generate &lt;script> tags and download JSON data on the fly - https://en.wikipedia.org/wiki/Cross-site_scripting


## Web Service Data Formats
- In the early days of Ajax, XML formats such as SOAP and RSS were popular.
- More recently, JSON (**J**ava**S**cript **O**bject **N**otation) has become the format of choice because it gives smaller file sizes than equivalent XML, and is easier for web browsers to parse because it maps directly to core JavaScript data types. JSON is also easier to send to web browser "cross domain", but we won't get into the details of that in this course.
- You can read about JSON here: http://www.json.org and here: 
- The 6 core data types of JSON are:
    - `String`
    - `Number`
    - `Object` (JSON object, no methods allowed!)
    - `Array`
    - `Boolean` (`true` or `false`)
    - `null`


## Review Questions
- What does AJAX stand for?
- What is the difference between AJAX (the acronym) and Ajax (the noun)?
- What are some of the advantages of using JSON as a web service format instead of XML?
- Why do you think that object methods (functions) are not allowed in JSON?

## Deliverable
The best way to see how Ajax and Web APIs work is to build a fully functioning example. You're going to build an application that utilizes the Giphy Web Service, using this tutorial:

- [GIF Finder](js9hw-gif-finder.md)

When it's done, upload your completed gif-finder.html file to your igme230 folder on banjo.rit.edu, and link to it from your main class page as "GIF Finder Exercise" It must be completed by 11:59pm on Sunday, November 5. 

