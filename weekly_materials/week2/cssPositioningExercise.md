# CSS Positioning Exercise

## Overview & Goals
Today you're going to put into practice some of the positioning information presented in the CSS Fundamentals tutorial that was assigned for today. I'm giving you an HTML file called [layout.html](layout.html) with the basic structure for the page you need to create, and [this example](layout.png) of my final version. You must replicate the layout provided, but you are free to change colors, fonts, and borders.  

## Setting Up Files and Folders
You don't need a new folder for today's exercise; it's going to go into the same week2 folder that you created on Tuesday. 

The HTML template you'll be using for this exercise is [layout.html](layout.html). To download an HTML file example from github, as with the text file last week, you should right-click on the "Raw" button in the top right corner, and save the file to the appropriate folder--in this case, your week2 folder. You'll also need this image: 

![lawley.jpg](lawley.jpg)

## Changing the Content
Don't. :) Replicate what you see in the screen shot!

## CSS Formatting Tips
I'm not going to walk you through creating the CSS, since I want you to start experimenting a bit with properties to see how they work. I will give you some information about how I did this. 

The reason I have 1px solid black borders around each of the major structural elements is so that I (and you) can see more easily what happens when you adjust padding (which is inside the border), margin (which is outside the border), size, and position. I find when I'm working with a new layout that the borders are very helpful as guides. Rather than adding to the border to each element individually, I set one rule at the start of the stylesheet that impacts all of the elements I plan on positioning:
``` header, footer, article, aside {border: 1px solid black;}```
Then I can comment out, modify, or delete that line when I'm done tweaking the layout. 

### Fonts
I used the following line at the beginning of my layout.css file to load a [Google font](https://fonts.google.com/) called Open Sans:

`@import url('https://fonts.googleapis.com/css?family=Open+Sans');`

### Page Background
The html element has a [background image](http://www.w3schools.com/cssref/pr_background-image.asp) of `http://silviahartmann.com/background-tile-art/images/black_woven_seamless_tile.jpg` . Note that I didn't put the patterned background behind the content itself, but rather put it behind an element that contains all of my content. This allows me to use a dark or high contrast background image or pattern without impacting readability. 

### Centered Content
To keep my content width fixed regardless of the size of the browser, and prevent the background image from making it unreadable, I used a "container" div with a width of 960px, a background color of white, and padding of 15px on all sides. 

To center the container div on the page, I used the following CSS rule:
`margin: 0 auto;`

### Header and Footer Elements
The header also has a fixed height (of 50px). Both the header and the footer use the text-align property to center their contents. 

### Article Element
The article element is floated right inside of the container div, with a width of 65%, a height of 500px; and padding on all sides.


### Aside Element
The aside element is floated to the left, with a width of 30%, a height of 500px, padding on the left and right to keep the contents from being too close to the edge of the element. I modified the size of the h2 element so that the headings were a more reasonable size.

The portrait image is at the top of the aside. You'll need to adjust padding and/or margin to align it properly.  

### Container Height and Scrolling Content
To keep my overall layout visible on most browsers without a need to scroll, I used CSS to set an absolute height for the article and aside elements. Since the content in the larger container is too long to fit in a container of that height, I used overflow:scroll on the article to allow the content to scroll.

## Uploading and Due Date
At the end of class, upload your HTML and CSS to your week2 folder on banjo.rit.edu. (Even if you didn't finish!) You have until Friday night at 11:59 to complete the exercise, but you have to post at least the html document by the end of today's class. 

## Project 1
As a reminder, your [first project](../../projects/project1.md)--a landing page for this class--is due next week. You're welcome to adapt this exercise for that purpose, although if you do you'll need to make sure that it still meets all the requirements for the assignment in terms of content (including annotations in your CSS so I'm sure you know what each definition is accomplishing). You also won't receive more than 1 out of the 3 points for design/typography unless you make meaningful modifications to the basic design (color, type, images, etc).  
