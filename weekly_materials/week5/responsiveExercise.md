# Responsive CSS Exercise (28 September 2017)

## Overview & Goals
Today's exercise will take you through the process of modifying the CSS for a simple website to make it responsive to varying screen size and resolution. 

## Setup
Download the [responsive-exercise.zip](responsive-exercise.zip) file, and extract the responsive-exercise folder. Put the folder on your desktop, or in your igme230 directory. Open the directory using Visual Studio Code. You should see a darth.html file, an images directory with two images, and a styles directory with a main.css file.

## The HTML File
Open the darth.html file in a web browser. It doesn't have any CSS styling yet, so it's pretty unimpressive. Now open the file in your editor. 

In the head of the document, you'll see this meta tag (which VS Code automatically places in any new HTML 5 document):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Defining the viewport is important in responsive pages. Here's a good explanation from <a href="https://www.w3schools.com/css/css_rwd_viewport.asp">W3Schools</a>:

>A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.<br/><br />The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).<br/><br />The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

In the body of the document, there are three main parts to the page: a `<header>` element, a `<section>` element, and an `<aside>` element. All of these are wrapped in a div with an id of #wrapper.  

You won't be modifying the HTML at all for this assignment; you'll only be adding styles to main.css

## Styling the Page

Open the main.css file from the styles directory. The only thing in it right now is a <a href="http://cssreset.com/what-is-a-css-reset/">basic CSS reset</a>, that will ensure that the default settings for display are consistent across different browsers. I've also added a Google Fonts request for the Arimo font, and set that as the default font for content elements. 

You're going to start by styling the page for display in a browser. (Keep in mind, however, this is often not the best approach. "Mobile first" design is increasingly the rule in web design and development; that's discussed in some detail in the video tutorial I assigned for today.)

### Logo Section
Add a style rule for the #logo id that does the following:   
- Sets a height of 70px and a width of 160px
- Floats it left
- Sets a background image of darth.png (which is in the images directory) with no repeating of the image

Note that because the "Darth" image is a background image, it will not show up when printing unless background graphics are turned on. That's something to consider when you're deciding whether to include graphics via CSS vs HTML. But because that information is also in the h1 element, that can be be set to display on printing, but not on the screen. To hide the text on the screen, add this line to the #logo definition: `text-indent: -9999px;`

The negative text-indent hides the text from the user (so that the background image of “Darth” is visible). Not only can this then be changed in a print media query, it also assists with accessibility (which we'll talk about more later this semester), and also makes the text visible to search engines. (There's more discussion of this technique here: http://www.dennisplucinik.com/blog/2007/09/01/css-hack-text-indent-10000px/ )

### Nav Section

We want the navigation element lined up next to the logo, and for the items to be in one line rather than stacked.  

First, float the nav element to the left. Then give `nav ul li` the following properties:
- use inline rather than block display
- set the font size to `x-large`
- add a left margin of 15px so that there's appropriate spacing

Finally, give the nav element a margin-top value of 35px so that it lines up better with the logo. 

(As you make changes to the CSS, make sure you watch how they change the appearance of the page!)

### Death Star Section

As you resize the window to make it smaller, you'll see that the image does not scale. Look at the CSS reset code--you'll see that the rules for images and other media are commented out. Remove the comment tags, so that the height:auto and max-width:100% are restored. Now the image should nicely when we change the size of the viewport. That's what we want. 

When the browser window is large enough, however, the fact that we floated the navigation bar means that the death star jumps up next to it instead of sitting below it. Fix that by adding a `clear: left` instruction for the #deathStar element. 

### Structure Section

The content below the image still needs some work. Let's make the text a little bigger for readability, and separate the two blocks of text. 

Set the font-size for `section` to `larger`.  Set the width of #about to 60%, and float it to the left. Set the width of #jobs to 35% and float it to the right. 

Now you have the two content sections in a two column layout underneath the nav Death Star image. But when you resize the window, the two columns stretch out a bit too far. 

Give the #wrapper element a max-width of 1000px so that the user can't infinitely stretch the content. Then center it by setting margin to `0 auto`. 

The "non-mobile" version of this site is done. Now you need to add a media query to use different CSS on a mobile device.

## Creating the Mobile Styles

Add the following to Media Queries section of main.css:

```css
@media screen and (max-width: 480px) {
	
}
```
The styles you put inside this query will only take effect when the viewport size is below 480px. 

To keep elements from wrapping improperly, add this instruction: 

```css
	nav, #about, #jobs {}
		float: left;
		clear: left;
		margin: 0 0 10px; 
		width: 100%;
	}	
```
To make the navigation links (`nav li`) work on mobile, you can either change the text size back to medium (which will fit on most mobile devices), or you can stack the list items by changing the display from inline back to block. 

You might also want to set the font-size in the section elements back to medium.  

Assuming your browser window is currently set to more than 480px in width, you won't see any changes yet. If you resize the window to a viewport size  of less than 480px (or use dev tools to specify a mobile screen size) you should see the changes take effect!

## Submitting Your Work
Upload your completed exercise to your igme230 directory on banjo, and link to it from your classwork page by 11:59pm tomorrow (Friday) night. Make sure you test the file on the server to make sure it displays properly.
