# Week 2 Tuesday In-Class Exercise (31 Jan 2017)

## Overview & Goals

In today's class, we will start by getting the .htaccess file that many of you had trouble with working properly. Then we'll talk a bit about validation and 

After that, we'll be working with your cremebrulee.html file, adding semantic markup, internal and external links, and additional CSS formatting. We're going to go through all of this step-by-step together in class, so I can talk about the various items as we address them,and I expect the file to be uploaded by the end of class. If we run out of time, I'll extend the due date. 

## Getting .htaccess Working

Several peole had trouble getting their .htaccess file to work. This can happen for a variety of reasons. Here are a few common issues:
- The file isn't named properly. It must be called .htaccess --nothing before the ., and no file extension after the name. That means if your text editor insisted on calling it htaccess.txt, you'll have to delete the .txt once the file is on the server. 
- The permissions aren't set properly. The .htaccess file must have global read permission (read and write for you, read for everyone else; the numeric permission string for this is 644). You can set permissions using your FTP client. 
- There are syntax problems in the file itself. The .htaccess can only include very specific instructions, and you cannot include extra characters or misspell the directives. The *only* thing that should be in the file should be the line `ModPagespeed off`. 

If you've checked all these things, but your .htaccess file is still preventing files from loading, you can use this shortcut instead for now:

1. Launch the program PuTTY, which is on all lab machines
2. Type in banjo.rit.edu for the host name (and make sure SSH / port 22 is selected)
3. When prompted, log in with your RIT user ID and password
4. Type the following commands, *exactly as they appear* (you can even copy and paste): 
```
cp ~ellics/www/igme230/.htaccess www/.htaccess
chmod 644 www/.htaccess
```
If you're using a Mac, you can do this by launching Terminal, and typing `ssh yourRITuserID@banjo.rit.edu` (it should go without saying, but replace "yourRITuserID" with your *own* RIT user ID), logging in with your RIT password, and then entering the commands shown above. 

Try loading your week1 exercise at `people.rit.edu/youruserid/igme230/week1/cremebrulee.html` and make sure you're not getting an error message. If you're still having trouble, ask me for help!

## Validating Your Page
If VS Code didn't report any errors while you were editing the file, your HTML is probably valid. (You'll get even better real-time error checking if you've installed the VS Code extension HTMLHint.) But it's also a good idea to run your page through the W3C validator (something I'll do for every assignment) just to be sure. You have a couple of ways to do this. The simplest is to go to http://validator.w3.org/, and paste the URL for your page into the box. If it shows any errors (don't worry about warnings for now), make sure you correct those before the end of class.

You can also install the excellent [Web Developer plug-in](https://chrispederick.com/work/web-developer/) for your browser (Chrome, Firefox, or Opera). It has a Tools menu that includes an option to run the current page through the W3C validator for HTML and/or CSS. That's what I use when I'm grading your pages. 

## Setting Up Folders and Files for Today's Exercise
In your local igme230 folder, create a new folder called week2. This week's exercise files will go in that folder.

Copy the cremebrulee.html, cremebrulee.css, and image files from the week1 folder into the week2 folder. Then use VS Code to open the week2 folder, so that you're working with the copies you just made. 

## Adding Semantic Markup
In the [tutorial that I assigned for today](../../Schedule.md#week2), the topic of "semantic markup" was introduced. We're going to add some semantic markup to the cremebrulee page now. 

Start by enclosing the section that appears as an information box on the wikipedia page (starting with the line above the image, and ending with the cookbook/media line) in a `<section>` tag. Then give the opening tag an id of infobox, like this: `<section id="infobox">`. 

Next, enclose the Contents heading and list in `<nav> ... </nav>` tags, since they're navigation for the page. 

Then, for each of the h2 headings that follow, surround the heading and the content with a section tag, using the section name as the ID value. Since IDs can't have spaces, replace the spaces with underscores. You can use mixed case, or all lower case. (I generally try to use all lower case for ID names, since it's easier to keep track of.)

[If you want to play around with Emmet, you can tell it to wrap content in a tag with a specific ID by selecting the content, pressing F1, typing `emmet wrap`, seleting "Emmet Wrap with Abbreviation", and then typing in `section#id_name`, where id_name is the id you want to use for that section.]

We're also going to add some semantic tags to the image in the Crema Catalana section. We want to display it with a caption, something we can do by using the `<figure>` and `<figcaption>` tags. We also need to give the image a unique ID, so that we can use CSS to format it individually. 

```
<figure id="crema_catalana_image">
    <img src="225px-Crema_Catalana_El_Glop.jpg" alt="Crema catalana served in El Glop, Barcelona, Spain" />
    <figcaption>Crema catalana served in El Glop, Barcelona, Spain</figcaption>
</figure>
```

IDs are typically used for assigning CSS properties, but they have other uses, as well. Because they are a unique identifier on the page, they can be used for internal links, as well as manipulated with Javascript. We won't be dealing with scripting today, but we are going to add internal links to the page. 

## Creating Contents Links
While you've probably had some experience with linking from one web page on your site to another, and to pages on other sites, you may not have had experience with linking to a location on the same page. We're going to start with that, before we add external links.

Go to the creme brulee page on Wikipedia, and try clicking on an entry in the Contents section. See what happens? Now try clicking on a footnote, and then on the ^ character in the footnote reference. That's what we're going to replicate.  

Because you've already added IDs for the sections, creating the links for the Contents section will be straightforward. Internal links use the same syntax as external links, but instead of a file name or URL they specify a unique location on the page. So, the first link in your Contents section will look like this: `<li><a href="#history">History</a></li>`. 

Add that code, save your work, and reload the page in a browser. Try clicking on the History link you just created; if you did it properly, the browser should jump to the History section. If that didn't work, ask for help! If it did work, go ahead and repeat the process for each of the remaining Contents entries. 

## Creating Footnote Links and Backlinks
There are a lot of footnotes in this document, and I'm not going to make you create links for all of them--but I am going to have you do it for the one footnote in the opening paragraph, and the first footnote in the History section. 

In the first paragraph, you should already have this footnote, formatted as a superscript: `<sup>[1]</sup>`. We're going turn this note into an internal link, and add an ID that allows the footnote to link back to this note. Here's how it should look:
```
<sup><a href="#ref1" id="note1a">[1]</a></sup>
```
What we're doing here is saying that clicking on the footnote number should take us to a location in the document with an ID of ref1 (which we haven't yet created), and also telling the browser that the note itself has a unique identifier of note1a. (Since the first reference has two footnotes pointing to it, we're going to label those two footnotes note1a and note1b.)

Now scroll down to the References section. The first reference should look like this:
```
<li><sup>^ a b</sup> Alan Davidson (21 August 2014). <em>The Oxford Companion to Food</em>. OUP Oxford. pp. 230–. ISBN 978-0-19-104072-6.</li>
```

You're going to add a link from the "a" back up to the first footnote, and also add an ID to the list item that lets the footnote link to this reference. Here's what the code should look like:

```
<li id="ref1"><sup>^ <a href="#note1a">a</a> b</sup> Alan Davidson (21 August 2014). <em>The Oxford Companion to Food</em>. OUP Oxford. pp. 230–. ISBN 978-0-19-104072-6.</li>
```

Save your work, and reload the page in a browser. You should now have a working link from footnote 1 in the first paragraph down to the first reference, and a link back from the "a" in the first reference back up to the first paragraph. If it doesn't work, ask for help!

Once you have it working, repeat the process for the first footnote in the History section. 

Finally, you should add the external links from the first two references to the external sources they cite. Go to the wikipedia page to find the URL you need to link to, and then add the link from the title of the reference. Here's what the first one should look like:

```
<li id="ref1"><sup>^ <a href="#note1a">a</a> b</sup> Alan Davidson (21 August 2014). <em><a href="https://books.google.com/books?id=bIIeBQAAQBAJ&pg=PA230">The Oxford Companion to Food</a></em>. OUP Oxford. pp. 230–. ISBN 978-0-19-104072-6.</li>
```

Don't worry about the ISBN links. 

## Formatting the infobox
On the wikipedia page, you can see that the creme brulee image is "floated" on the right side of the page. We're going to add the CSS to make that happen on your page. 

First, however, we need to format the content below the image. Wikipedia uses a table for that content, so that's what we're going to do, as well. In order to make the titles bold, we'll use the `<th>` (table header) tag rather than the `<td>` (table data) tag. Here's what the table should look like:

```
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

Now we need to deal with formatting the entire infobox element, by adding style rules for it in the cremebrulee.css file.

We'll start by putting a border around the element, and changing the background color, like this:

```
#infobox {
    border: 1px solid black;
    background-color: #EEE;
}
```

Make sure you've saved changes in both files, and reload the html to see if that worked. If it did, you'll have a thin black border and a light gray background--but instead of it being the width of the image, it's probably the width of the page--not really what we want. We need to explicitly set the width of the box so that it's a few pixels wider than the image (which is 288px wide). We also want to center the content of the box. So we'll add a few more lines to the definition. 

```
#infobox {
    border: 1px solid black;
    background-color: #EEE;
    width: 300px;
    text-align: center;
}
```

Save and refresh; it should look a bit better now, but because CSS properties are inherited, we accidentally centered all the text inside the table. We'll fix that once we're done with the infobox. 

We probably want all of the text in the box to be a little smaller. Try adding `font-size: smaller` to the definition. 

Now that we have the box formatted more like the one on Wikipedia (it's not perfect, but it's good enough for our purposes), we need to float it to the right of the content. Add the rule `float: right` to the definition. Refresh the page...and *voila*! 

The text in History is right up against the edge of the box, though, and that doesn't look quite right. Let's add 20 pixels of space to the left margin of the box to fix that. Our infobox definition should now look like this:

```
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

```
table {
    text-align: left;
    margin-left: 5px; 
}
``` 

That looks pretty good. Let's move on. 

## Formatting the Contents
We're going to use some similar techniques to format the contents.

Just as we did with the infobox, we also want to add a border and a background color. We also want to set a width, but we want the width to be determined by the items inside the box. To do that, we're going to use a CSS that changes the way the browser deals with the element as a whole: [display: inline-block](http://www.w3schools.com/css/css_inline-block.asp). This property will allow the nav container to shrink to fit its contents. 

```
nav {
    border: 1px solid silver;
    background: #EEE;
    display: inline-block;
}
```

That's a good start, but the contents are right up against the edge of the box again. Let's add 8 pixels of padding. 

```
nav {
    border: 1px solid silver;
    background: #EEE;
    display: inline-block;
    padding: 8px;
}
```

Finally, we need to fix the Contents heading. We don't want it to look like the other H2 elements. We can use a descendant selector to redefine the H2 element *only* inside of the nav element, like this:

```
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

```
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

```
#crema_catalana_image figcaption {
    font-size: x-small;
}
``` 

To fix the wrapping problem, we need to add add a "clear" property to end the float behavior. In our original h1 and h2 declaration, from last week's exercise, we're going to add a rule for clearing the content past any floated elements. Put it at the end of the existing style declaration:

```
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

We'll start with the code to add the image after all links:

```
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

```
a[href*="wikipedia.org"]:after {
  content: '';
  margin: 0;
} 
```

This works exactly like the rule above, but it only selects `<a>` elements that have wikipedia.org in their href value. It then removes the `after:` content and resets the margins. If you refresh your page, you should now see the icon in the references links, but not in the wikipedia link at the top. 

## Uploading and Due Date
When you're done, you should use an SFTP program to upload your week2 folder to your igme230 folder on banjo.rit.edu. The completed html file should display properly at `http://people.rit.edu/yourRITid/igme230/week2/cremebrulee.html`

If we are able to complete the work as a group in class, I will expect you upload the file before you leave. If (and only if) we are not able to complete the work in class, I will give you until Wednesday night at 11:59pm to complete it, and I will check them on Thursday morning. 