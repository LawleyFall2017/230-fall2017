# Advanced Markup Exercise

## Overview & Goals

We'll be working with your cremebrulee.html file, adding semantic markup, internal and external links, and additional CSS formatting. We're going to go through all of this step-by-step together in class, so I can talk about the various items as we address them,and I expect the file to be uploaded by the end of class. If we run out of time, I'll extend the due date. 

## Validating Your Page
If VS Code didn't report any errors while you were editing the file, that's good! However, the default HTML error-checking in VS Code is somewhat limited. (For even better real-time error checking, you can install the VS Code extension HTMLHint.) But it's also a good idea to run your page through the W3C validator (something I'll do for every assignment moving forward) just to be sure. You have a couple of ways to do this. The simplest is to go to http://validator.w3.org/, and paste the URL for your page into the box. (If your page isn't online yet, you can also copy and paste in the code from your reditor, or upload a copy of the file from your computer.) If it shows any errors, make sure you correct those before the assignment is due. (Don't worry about warnings; we'll only take off points for errors.)

You can also install the excellent [Web Developer plug-in](https://chrispederick.com/work/web-developer/) for your browser (Chrome, Firefox or Opera). It has a Tools menu that includes an option to run the current page through the W3C validator for HTML and/or CSS. That's what I use when I'm grading your pages.  

## Setting Up Folders and Files for Today's Exercise
In the igme230 folder on your computer, make a copy of the week1 folder and rename it as week2. (If you don't have the folder locally right now, you can download a copy from banjo.rit.edu.) Then use VS Code to open the week2 folder. 

## Adding Semantic Markup
In today's lecture, I talked a bit about the concept of "semantic markup." We're going to add some semantic markup to the cremebrulee page now. 

Start by enclosing the section that appears as an information box on the wikipedia page (starting with the line above the image, and ending with the cookbook/media line) in a `<section>` tag. Then give the opening tag an id of infobox, like this: `<section id="infobox">`. 

Next, enclose the Contents heading and list in `<nav> ... </nav>` tags, since they're navigation for the page. 

For each of the h2 headings that follow, surround the heading and the content with a section tag, using the section name as the ID value. Since IDs can't have spaces, replace the spaces with underscores. You can use mixed case, or all lower case. (I generally try to use all lower case for ID names, since it's easier to keep track of.) Here's an example: 
```html
<section id="technique">
    <h2>Technique</h2>
    <p>Crème brûlée is usually served in individual ramekins. Discs of caramel may be prepared separately and put on top just before serving, or the caramel may be formed directly on top of the custard, immediately before serving. To do this, sugar is sprinkled onto the custard, then caramelized under a salamander broiler or with a butane torch.<sup>[7]</sup></p>
</section>
```

If you want to play around with Emmet, you can tell it to wrap content in a tag with a specific ID by selecting the content, pressing F1, choosing "Emmet Wrap with Abbreviation", and then typing in `section#id_name`, where id_name is the id you want to use for that section--e.g. `section#technique`.

We're also going to add some semantic tags to the image in the Crema Catalana section. We want to display it with a caption, something we can do by using the `<figure>` and `<figcaption>` tags. We also need to give the image a unique ID, so that we can use CSS to format it individually. 

```html
<figure id="crema_catalana_image">
    <img src="225px-Crema_Catalana_El_Glop.jpg" alt="Crema catalana served in El Glop, Barcelona, Spain" />
    <figcaption>Crema catalana served in El Glop, Barcelona, Spain</figcaption>
</figure>
```

IDs are often used for assigning CSS properties, but they have other uses, as well. Because they are a unique identifier for an element on the page, they can be used for internal links, or as targets for JavaScript actions. We won't be dealing with scripting today, but we are going to add internal links to the page. 

## Creating Internal Links
While you've had some experience with linking from one web page on your site to another, and linking to pages on other websites, you probably have not had experience with linking to a location within the same document. We're going to start with that.

Go to the creme brulee page on Wikipedia, and try clicking on an entry in the Contents section. See what happens? Now try clicking on a footnote, and then on the ^ character in the footnote reference. That's the functionality we're going to replicate.  

Because you've already added IDs for each of the sections, creating the links for the Contents section will be fairly straightforward. Internal links use the same syntax as external links, but instead of a file name or URL they specify a unique location on the page, typically using an ID. So, the first link in your Contents section will look like this: `<li><a href="#history">History</a></li>`. 

Add that code, save your work, and reload the page in a browser. Try clicking on the History link you just created; if you did it properly, the browser should jump to the History section. If that didn't work, ask for help! If it did work, go ahead and repeat the process for each of the remaining entries in the Contents section. 

## Creating Footnote Links and Backlinks
There are a lot of footnotes in this document, so I'm not going to make you create links for all of them--but I am going to have you do it for the one footnote in the opening paragraph, and all of the footnotes in the History section. If you look at those two paragraphs, you'll see that footnote 1 appears in both; we'll have to take that into account in our links. 

In the first paragraph, you should already have this footnote, formatted as a superscript: `<sup>[1]</sup>`. We're going turn this note into an internal link, and also add an ID that allows the footnote to link back to this note. Here's how it should look:
```
<sup><a href="#ref1" id="note1a">[1]</a></sup>
```
This code accomplishes two things. First, it turns the footnote into a link that will take us to an element on the page with an id of "ref1"--which we'll add in a minute. Second, it assigns an ID of "note1a" to the to footnote itself. (We could also have chosen to assign the ID to the sup element rather than the a element.)

In the History section, do the same thing for the last footnote, which also points to reference 1 in the list. Give it an ID of note1b. (Remember, all IDs on a given webpage must be unique!)

Now scroll down to the References section. The first reference should look like this:
```
<li><sup>^ a b</sup> Alan Davidson (21 August 2014). <em>The Oxford Companion to Food</em>. OUP Oxford. pp. 230–. ISBN 978-0-19-104072-6.</li>
```

The a and the b refer to the two different locations in the document that use the same footnote number. You're going to add a link from the "a" and the "b" back up to their respective footnotes. You'll also need to add the "ref1" ID to the reference itself. Finally, go to the original Wikipedia page, find the external resource that the reference should point to, and add the link. (Don't worry about the ISBN links.)

Here's what the code should look like:

```html
<li id="ref1">
    <sup>^ <a href="#note1a">a</a> <a href="#note1b">b</a></sup> Alan Davidson (21 August 2014). <em><a href="https://books.google.com/books?id=bIIeBQAAQBAJ&pg=PA230">The Oxford Companion to Food</a></em>. OUP Oxford. pp. 230–. ISBN 978-0-19-104072-6.
</li>
```

Save your work, and reload the page in a browser. You should now have a working link from the two `[1]` footnotes down to the first reference, and a link back from the "a" and the "b" in that back up to the appropriate footnotes. If that doesn't work, ask for help!

Once you have it working, repeat the process for the rest of the footnotes in the History section. (Footnotes 2 and 5 each have two locations, so will need a/b notations in the footnote IDs; footnotes 3 and 4 have only one location, so you can omit the letter.)

## Formatting the infobox
On the wikipedia page, you can see that the creme brulee image is "floated" on the right side of the page, in a box with related content. We're going to add the CSS to make that happen. 

Start by grouping the image and the content to be shown below it within a single element. The best way to do this is to surround it in a div with an id of "infobox". That will allow us to position all of this content as a group. 

Before we deal with positioning, however, we need to format the content below the image. Wikipedia uses a table for that content, so that's what we're going to do, as well. (Need a refresher? Try the [W3Schools HTML Tables page](https://www.w3schools.com/html/html_tables.asp).) 

In order to make the headings bold, we'll use the `<th>` (table header) tag rather than the `<td>` (table data) tag. Here's what the table should look like:

```html
<table>
    <tr>
        <th>Alternative names</th>
        <td>Burnt cream, crema catalana, Trinity cream</td>
    </tr>
    <tr>
        <th>Course</th>
        <td>Dessert</td>
    </tr>
    <tr>
        <th>Place of origin</th>
        <td>France</td>
    </tr>
    <tr>
        <th>Serving temperature</th>
        <td>Room temperature</td>
    </tr>
    <tr>
        <th>Main ingredients</th>
        <td>Custard, caramel</td>
    </tr>
</table>
```

(Make sure all of this stays within the infobox div.)
 
Next we'll format the entire infobox element, by adding style rules for it in the cremebrulee.css file.

Start by putting a border around the element, and changing the background color, like this:

```
#infobox {
    border: 1px solid black;
    background-color: #EEE;
}
```

Make sure you've saved changes in both files, and then preview the page to see if that worked. If it did, you'll have a thin black border and a light gray background--but instead of it being the width of the image, it's probably the width of the page--not really what we want. We need to explicitly set the width of the box so that it's a few pixels wider than the image (which is 288px wide). We also want to center the content of the box. So we'll add a few more lines to the definition. 

```css
#infobox {
    border: 1px solid black;
    background-color: #EEE;
    width: 300px;
    text-align: center;
}
```

Save your work and preview the page; it should look a bit better now, but because CSS properties are inherited, centering the entire box also centered all the text inside the table. We'll fix that once we're done with the infobox styling. 

We probably want all of the text in the box to be a little smaller. Try adding `font-size: smaller` to the definition. 

Now that we have the box formatted more like the one on Wikipedia (it's not perfect, but it's good enough for our purposes), we need to float it to the right of the content. Add the rule `float: right` to the definition. Refresh the page...and *voila*! 

The text in History is right up against the edge of the box, though, and that doesn't look quite right. Let's add 20 pixels of space to the left margin of the box to fix that. Our infobox definition should now look like this:

```css
#infobox {
    border: 1px solid black;
    background-color: #EEE;
    width: 300px;
    text-align: center;
    font-size: smaller;
    float: right;
    margin-left: 20px; 
}
```

Now let's fix the centered text inside the table, and nudge it a little away from the edge of the box. 

```css
table {
    text-align: left;
    margin-left: 5px; 
}
``` 

That should look pretty good. Let's move on. 

## Formatting the Contents
We're going to use some similar techniques to format the Contents box.

Just as we did with the infobox, we want to add a border and a background color. We also want to set a width, but we want the width to be determined by the items inside the box. To do that, we're going to use a CSS that changes the way the browser deals with the element as a whole: [display: inline-block](http://www.w3schools.com/css/css_inline-block.asp). This property will allow the nav container to shrink to fit its contents. (This is covered in more detail in Thursday's readings, too.)

```css
nav {
    border: 1px solid silver;
    background: #EEE;
    display: inline-block;
}
```

That's a good start, but the contents are right up against the edge of the box again. Let's add 8 pixels of padding. 

```css
nav {
    border: 1px solid silver;
    background: #EEE;
    display: inline-block;
    padding: 8px;
}
```

Finally, we need to fix the Contents heading. We don't want it to look like the other H2 elements. We can use a descendant selector to redefine the H2 element *only* inside of the nav element, like this:

```css
nav h2 {
    font-family: 'Helvetica Neue','Helvetica','Nimbus Sans L','Arial','Liberation Sans',sans-serif;
    font-weight: bold;
    font-size: medium;
    text-align: center; 
    border-bottom: none;
}
```

By putting a space, and not a comma, between nav and h2, we tell the browser to only apply this style to H2 elements that are *within* a nav element. 

It's not quite perfect--we really ought to fix the alignment of the list with the heading--but I'll leave that as an optional exercise for you :) 

## Formatting the Crema Catalana Image
We still need to properly format and float the small image in the Crema Catalana section. 

To get something similar to what's on the Wikipedia page, we need to float the figure element containing the image to the left of the text in that section. We also need to give it a border, a background color, some padding between the border and the contents of the box, and some space between the box and the text to its right. Here's the code to do that:

```css
#crema_catalana_image {
    float: left;
    width: 122px; 
    border: 1px solid black; 
    margin-right: 15px;
    margin-left: 0px;
    padding: 3px;
    background-color: #EEEEEE;
}
```

Take a look at the page now. It's not quite where we want it. We still need to format the caption properly, and also deal with the fact that the content after it is wrapping in a way that's not correct. 

To fix the caption, we'll use another descendant selector:

```css 
#crema_catalana_image figcaption {
    font-size: x-small;
}
``` 

To fix the wrapping problem, we need to add add a "clear" property to end the float behavior. In our original h1 and h2 declaration, from last week's exercise, we're going to add a rule for clearing the content past any floated elements. Put it at the end of the existing style declaration:

```css
h1, h2 {
    font-family: 'Linux Libertine',Georgia,Times,serif;
    line-height: 1.3;
    margin-bottom: 0.25em;
    padding: 0;
    border-bottom: 1px solid #a2a9b1;
    font-weight: normal;
    clear: both; 
    }
```
Now the heading following the figure box will drop down to below the floated element. 

(Note that because h1 and h2 are separated with a comma rather than a space in this declaration, the style rules will apply to all instances of both tags.)

## Adding Icons to External Links
One interesting thing that Wikipedia does is add a small icon at the end of every link that goes *outside* of the Wikipedia domain. This is something we can accomplish using some more advanced CSS properties. 

Because it's much easier to identify links that *are* in the domain than those that aren't, we're going to create two rules for this. The first will put the icon at the end of every link on the page. The second will remove it for links outside of the domain.  

To test this, we need to have at least one link on the page that goes to Wikipedia. Let's add that at the top of the document. Add a link back to the Wikipedia creme brulee page from the line that says "From Wikipedia, the free encyclopedia"

Now you've got a wikipedia link at the top, and two non-wikipedia links in the references.

We'll start with the code to add the icon after all links:

```css
a[href^="http"]:after {
    content: url(http://upload.wikimedia.org/wikipedia/commons/6/64/Icon_External_Link.png);
    margin: 0 0 0 5px;
} 
```

This is a lot more complex than any of the other rules we've used thus far. Let's break it down.

It starts with what's called an [attribute selector](http://www.w3schools.com/css/css_attribute_selectors.asp), telling the browser that this rule only applies to `<a>` tags that have an href attribute beginning with http. 

It then uses the [:after](http://www.w3schools.com/cssref/sel_after.asp) selector to append content after the `<a>` element. We're specifying the content source using a url value, since it's an image, but we could also append a text string if we preferred. 

Then we add margin values to keep everything properly aligned. Because this is all done with  CSS, we don't need to modify the HTML for every link if we decide later we don't want the icon, or want to use a different image entirely. 

If you save and refresh the page in a browser, you should see the icon appear after the Wikipedia link and the references links. You won't see it in the contents, or the footnotes, because those don't have http in their href values. 

Now we want to remove the icon from the Wikipedia link. We'll use similar code to accomplish that. 

```css
a[href*="wikipedia.org"]:after {
  content: '';
  margin: 0;
} 
```

This works exactly like the rule above, but it only selects `<a>` elements that have wikipedia.org in their href value. It then removes the `after:` content and resets the margins. If you refresh your page, you should now see the icon in the references links, but not in the wikipedia link at the top. 

## Uploading and Due Date
When you're done, you should use FileZilla program to upload your week2 folder to your igme230 folder on banjo.rit.edu. The completed html file should display properly at `http://people.rit.edu/yourRITid/igme230/week2/cremebrulee.html` Test it to make sure it works!

The final version must be submitted by 11:59pm on Wednesday night. My grader or I will check them on Thursday morning. (If you want an extension on this, you need to notify me *and* our grader in Slack *before* it's due.)