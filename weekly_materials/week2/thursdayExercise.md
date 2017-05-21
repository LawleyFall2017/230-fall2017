# Week 2 Thursday In-Class Exercise (2 Feb 2017)

## Overview & Goals
Today you're going to put into practice some of the positioning information presented in the CSS Fundamentals tutorial that was assigned for today. I'm giving you an HTML file called [layout.html](layout.html) with the basic structure for the page you need to create, and [this example](layout.png) of my final version. You must replicate the layout provided, but you are free to change colors, fonts, and borders.  

## Setting Up Files and Folders
You don't need a new folder for today's exercise; it's going to go into the week2 folder that you created on Tuesday. 

The HTML template you'll be using for this exercise is [layout.html]. To download an HTML file example from github, you'll need to click on the "Raw" button in the top right corner, and then save that to the appropriate folder--in this case, your week2 folder. 

## Changing the Content
You should edit the HTML file to replace my name and my photograph with your own, and you should add your own content in the sidebar and the main content section. (If you can't think of anything to say, I'm okay with you using "<a href="http://mashable.com/2013/07/11/lorem-ipsum/">lorem ipsum</a>" text.)

## CSS Formatting Tips
I'm not going to walk you through creating the CSS, since I want you to start experimenting a bit with properties to see how they work. I will give you some information about how I did this. 

The reason I have 1px solid black borders around each of the major structural elements is so that I (and you) can see more easily what happens when you adjust padding (which is inside the border), margin (which is outside the border), size, and position. I find when I'm working with a new layout that the borders are very helpful as guides, and I can turn them off when I'm done. Rather than adding to the border to each element individually, I set one rule at the start of the stylesheet:
``` header, footer, article, aside {border: 1px solid black;}```
Then I can comment out, modify, or delete that line when I'm done tweaking the layout. 

I haven't provided specific information on the tweaks I made to the margins and padding of the elements on this page; I want you play around and try to recreate it yourself. 

### Fonts
I used the following line at the beginning of my layout.css file to load a [Google font](https://fonts.google.com/) called Open Sans:

`@import url('https://fonts.googleapis.com/css?family=Open+Sans');`

### Page Background
The html element has a [background image](http://www.w3schools.com/cssref/pr_background-image.asp) of `http://silviahartmann.com/background-tile-art/images/black_woven_seamless_tile.jpg` . 

### Centered Content
To keep my content width fixed regardless of the size of the browser, and prevent the background image from making it unreadable, I used a "container" div with a width of 960px, a background color of white, and padding of 15px on all sides. 

To center the container div on the page, I used the following CSS rule:
`margin: 0 auto;`

### Header and Footer Elements
The header is the only fixed-height element on the page, set to 50px. Both the header and the footer use text-align to center their contents. 

### Article Element
The article element is floated right inside of the container div, with a width of 65%, and padding on all sides.

The portrait image is floated left inside of the article, and has additional padding on the right side to provide space between the image and the text. You'll need to play with padding and/or margin settings to get it to align properly with the text next to it. 

### Aside Element
The aside element is floated to the left, with a width of 30%, and padding on the left and right to keep the contents from being too close to the edge of the element. I modified the size of the h2 element so that the headings were a more reasonable size. 

## Uploading and Due Date
At the end of class, upload your HTML and CSS to your week2 folder on banjo.rit.edu. (Even if you didn't finish!) 

Because your [first project](../../projects/project1.md) (your personal page for the class) is due this weekend, I want you focused on that, rather than this exercise, after class is over.