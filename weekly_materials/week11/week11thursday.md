# Week 11 Thursday Exercise (13 April 2017): Using jQueryUI

## Overview & Goals
Today you're going to work with the [jQuery UI](https://jqueryui.com/) library, which extends jQuery to provide a range of interface enhancements for web pages. 

Useful jQuery UI Resources:
* [jQuery UI Getting Started Guide](https://learn.jquery.com/jquery-ui/getting-started/)
* [jQuery UI Demos](https://jqueryui.com/demos/) page

## Part 1: Setting Up & Testing

Create a new HTML file called jqueryui.html, and put it in your week11 folder. 

Since jQuery UI builds on top of jQuery, start by going to the [Google Hosted Libraries](https://developers.google.com/speed/libraries/) site, finding the code snippet for the most recent version of jQuery in your page (as of 12 April 2017, that's version 3.2.1), and adding that to your document (it can go in either the head or the body of the page. While you're on the hosted libraries page, find the code snippets for the jQuery UI library as well. You'll see that it has two parts--a stylesheet element and a script element.

Why a stylesheet? Since jQuery UI is all about the user interface to a page, it requires a set of CSS rules to accompany the JavaScript functions. There are several pre-defined themes in the jQuery UI library--one of which, "smoothness", is referenced by default in the Google code snippet. You can see and demo all of the prebuilt themes by selecting the "Gallery" tab on the [jQuery UI Theme Roller](https://jqueryui.com/themeroller/). You can also use either the "Edit" option for an existing theme, or the "Roll Your Own" tab on that page to create your own customized theme.

If you create your own theme, you'll need to download the resulting CSS file to your week11 folder and change the stylesheet reference in the head of your document to point to the local file. If you want to use a different prebuilt theme than "smoothness," without making changes, you can simply change the name of the theme in your stylesheet reference. (Change any capital letters to lowercase, and replace spaces with dashes. For example, the "UI Lightness" theme would be referenced as https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css)

To test and make sure that everything's working, add this HTML to your page:

```html
<p>Select a date: <input type="text" name="date" id="date"></p>
```


And add this script block with a jQuery UI call at the bottom of your document, before the `</body>` tag:

```html
<script>
    $("#date").datepicker();
</script>
```

Save your work and load the page in a browser; you should now have a functioning pop-up date picker. If it doesn't work, ask for help before continuing.  

## Part 2: jQuery Widgets
The date picker you just added is an example of a jQuery UI widget. These are a type of jQuery plugin using a specific architecture to offer stateful design and associated methods and events. Here's a [list of widgets that ship with jQuery UI](http://api.jqueryui.com/category/widgets/). If you select datepicker from that list, you'll see the full API information, including details on the options, methods, and events associated with the widget, as well as code examples.

While the API pages provide detailed documentation for jQuery UI's components, when you're first getting started you will probably find the examples provided on the [jQuery UI Demos Page](http://jqueryui.com/demos/) more helpful.  Take a look at the demo page for the [datepicker](http://jqueryui.com/datepicker/) widget. 

Using the information on that page, change the datepicker so that it shows two months at a time, and includes buttons at the bottom for "today" and "done." 

By default, the date picker is a bit big. If you want it to be a little bit smaller, you'll need to do that by modifying the CSS. You'd think you could just modify the CSS for the #date div, but it turns out you'd be wrong! Any sizing that you add to the div will be overwritten by the .ui-datepicker class in the jQuery UI stylesheet. You can change the size for that class in a local style or stylesheet, but make sure that you put it *after* the call to the overall UI stylesheet, so that your style isn't overwritten. Alternatively, you can use the importance marker in CSS to make sure your rule takes precedence, like this:

```html
<style>
   div.ui-datepicker {
    font-size: 62.5% !important;
    }
</style> 
```

## Part 3: jQuery UI Interactions

In addition to widgets, the jQuery UI library also provides a set of interactions that you can add to content on your page: Draggable, Droppable, Resizable, Selectable, and Sortable. Take a look at each of these on the [Demos page](http://jqueryui.com/demos/). 

Using the instructions on the [Sortable](http://jqueryui.com/sortable/) page, implement a 3x3 grid of numbers on your jqueryui.html page that looks like this: 

![Screenshot of sortable grid](sortable-grid.png)

(A hint on turning it green: Use the developer tools to inspect the li elements and see which class(es) are applied. Use that information to figure out which classes to modify.)


### Part 4: Submitting Your Work 
Once you've got the datepicker widget and the sortable interaction working properly, upload the file to your week11 folder on banjo, and link your completed page from your main igme230 page. This assignment is due by 2pm on Saturday, 15 April. 