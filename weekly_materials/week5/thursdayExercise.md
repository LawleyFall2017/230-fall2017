# Week 5 Thursday In-Class Exercise (23 Feb 2017)

## Overview & Goals
Today's exercise will take you through the process of modifying the CSS for a simple website to make it responsive to varying screen size and resolution. 

## Setup
Download the [week5b.zip](week5b.zip) zip file, and extract the week5b folder. Put the folder on your desktop, or in your igme230 directory. Open the directory using Visual Studio Code.

## The HTML File
Open the darth.html file in a web browser. It doesn't have any CSS styling yet, so it's pretty unimpressive. 

Now open the file in your editor. Ignore the items in the head of the document for now, and look at the structure of the content. You’ll see that there are three main parts to the page: a `<header>` element, a `<section>` element with the id =”main”, and an `<aside>` element. All of these are wrapped in a div called "wrapper".  

## Styling the Page
Open the main.css file from the styles directory. The only thing in it right now is a basic CSS reset, that will ensure that the default settings for display are consistent across different browsers. 

Add the following to the Logo section of the stylesheet:

```css
header h1 {
	height: 70px;
	width: 160px;
	float: left;
	display: block;
	background: url(../images/darth.png) 0 0 no-repeat;
	text-indent: -9999px;
}
```

This gives the h1 element inside of the header element a background image, floats it on the left side of the page, and sets it to a narrow width so there is room for the nav system (and so the float works well).

The negative text-indent hides the text from the user (so that the background image of “Darth” is visible). In addition to helping with accessibility, as we discussed last week, this makes it possible for search engines to see the text. (There's more discussion of this technique here: http://www.dennisplucinik.com/blog/2007/09/01/css-hack-text-indent-10000px/ )

Now add this code to the Nav section of the stylesheet:

```css
header nav {
	float: right;
	margin-top: 40px; 
}
	
header nav li {
	display: inline;
	margin-left: 15px;
}

#skipTo {
	display: none;
}
	
#skipTo li {
	background: #b1fffc;
}
```
These rules cause the navigation list to display all in one line, rather than in a separate rows.

We are also hiding the “skip to” navigation, and will only reveal it once we are in “mobile mode”

Save your work, and view the page in a browser again. It looks better, but if you resize the browser to a narrow width you will see that the content is fixed in size and not at all responsive.

Now add the following code to the Banner section of main.css:

```css			
#banner {
	float: left;
	margin-bottom: 15px;
	width: 100%;
}

#banner img {
	width: 100%;
}
```

Now try scaling the page - notice that the image scales down nicely - but also scales up as big as you want to grow the browser window.
	
You might have also noticed that our “main” div - “Facts about Darth Vader” is at the top of the screen. We need to fix that.

Add the following code to the Structure section of main.css:

```css
#main {
	width: 60%;
	margin-right: 5%;
	float: left;
}		
	
aside{
	width: 35%;
	float: right;
}
```

Reload the page. Note that we now have #main and `<aside>` where we want them, with a nice two column layout underneath the nav Death Star image

To give our page a max-width so that the user can’t infinitely scale our image, and to add a little padding around the content, add the following to the Structure section:

```css
#wrapper {
	width: 96%;	
	max-width: 920px;
	margin: auto;
	padding: 2%;
} 
```
The “non-mobile” version of this site is done, now let’s use a media query to give different CSS to a mobile device.

## Creating the Mobile Styles

Add the following to Media Queries section of main.css:

```css
@media screen and (max-width: 480px) {

	#skipTo {
		display: block;
		}
	
	header nav, #main, aside {
		float: left;
		clear: left;
		margin: 0 0 10px; 
		width: 100%;
	}	
	header nav li {
		margin: 0;
		background: #efefef;
		display: block;
		margin-bottom: 3px;
	}
	header nav a {
		display: block;
		padding: 10px;
		text-align: center;
	}			
}
```

Here's what that code will do, *if* the viewport size is less than or equal to 480px:
- Show the “Skip Nav” link
- Shift the page to a single column layout - with nav, #main, and aside on top of one another
- Display the navigation links in a row again, and give them a lot of padding so that they look like “table cells” from iOS or Android.

If you view the page in the browser again at a viewport size of >480px, it should look the same, since the media query won't be triggered. But if you resize the browser window to less than 480px, you'll see the layout change dramatically!

Now, if you try this on a smartphone, depending on the model, you may notice that some text is smaller than you want or other issues pop up. This is because the smartphone scales everything on the page, which you can correct by adding the following in the <head> of your HTML:

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`


## Submitting Your Work

Upload your week5b folder with the updated main.css file to your igme230 folder on Banjo by 11:59pm tonight. Make sure you test the file on the people.rit.edu server to make sure it displays properly, and then make sure you've added a link to the folder from your personal page. 
