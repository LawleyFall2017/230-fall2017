# Week 12 Tuesday Exercise (18 April 2017): SVG Basics

## Overview & Goals
Today you'll learn how to create Scalable Vector Graphics (SVG), and include them in a web page.

You may find these pages helpful: 

* [W3Schools SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
* [MDN SVG Documentation & Resources](https://developer.mozilla.org/en-US/docs/Web/SVG)
* [The Designer's Guide to Working With SVG](https://www.sitepoint.com/designers-guide-working-with-svg/)

## Part 1: Coding a Simple SVG
In a code editor, create a new file called simple.svg. You're going to create a very simple vector image by hand using the SVG markup language. 

SVG documents start and end with an `<svg>` tag, rather than an `<html>` tag. The SVG tag should indicate which specification it's using, via the xmlns (XML namespace) attribute, like this:

```html
<svg xmlns="http://www.w3.org/2000/svg">

</svg>
```

Inside of the svg element, we can describe a vector graphic element, like this: 

```html
<circle cx="50" cy="50" r="25" fill="red" stroke="black" stroke-width="2" />
```

That should result in a circle, with cx and cy defining the x and y coordinates of the *center* of the circle, r defining its radius, and the remaining attributes describing the stroke and fill for the object. Save the file, and open it in a browser. You should see a red circle with a black border. 

(If you omit cx and cy, the default coordinates will be 0,0. Try removing the cx and cy attributes from the circle object, saving the file, and reloading the page. What happens? Put the cx and cy values back before moving on.)

Now let's add a rectangle to the SVG. Place this after the circle definition: 

```html
<rect width="200" height="200" x="50" y="50" fill="black" />
```

Unlike the circle, the x and y coordinates for a rectangle describe the location of its top left corner, rather than its center. Save and reload the page; you should see a black rectangle, with its top/left coordinates in the same place as the center of the circle. Because SVG draws the elements in the order they appear in the file, the rectangle is drawn on top of the circle. If you wanted the circle on top, you could reorder the two lines. 

You can see a list of other SVG shapes and elements, including ellipses, polygons, lines, paths, and text, and the syntax for creating them, in the [W3Schools SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp).

## Part 2: Including SVG in HTML Documents
While your browser can display SVG files directly, you typically will want to include one or SVGs in the context of an HTML page with other content; this also allows you to JavaScript to manipulate the graphic. 

There are three ways to include an SVG file in a page. The first is to treat it the same way you would a raster image, using the `<img>` tag to reference the external SVG file. The second is to embed the SVG directly in the HTML. And the third is to use JavaScript to load the external SVG file. In today's exercise, you'll be using both the first and the second approaches; on Thursday we'll add the third. 

Create a new HTML file in your week12 folder, and call it svgdemo.html. In the body of the document, add an img tag that points to your simple.svg file. Save the new HTML document, and load it in a browser; you should see your SVG displayed. It's likely, however, that part of the image will be cropped. This is because your browser doesn't actually know how big the SVG image is. We can fix this in either of two ways--we can add a height and width to the image tag, or we can add a height and width inside the SVG itself. The latter is a better choice, so let's do that. 

Your SVG needs to be at least 250px in both width and length, to account for the 50px x/y offset of the 200px square. Add height="250" and width="250" to the `<svg>` tag in your simple.svg document, and then reload the svgdemo.html page. You should be able to see the entire SVG now. 

The problem with adding an SVG with the img tag, however, is that it doesn't load the individual components of the SVG into the DOM--the SVG is treated as a single img element. Use the element inspector (in Chrome, right-click on the document and choose "Inspect") to view the DOM for the svgdemo.html page. You'll see that there's only one img element in the body of the document. 

Now we'll try embedding the SVG directly inside the HTML instead. 

Remove the `<img>` tag from your svgdemo.html file, and paste the contents of your simple.svg file into the body of the document. Save the file, and display it. It should look exactly the same as it did when you used the img tag. However, when you use the document inspector, you should see that each element in the SVG is now part of the DOM, meaning we can independently manipulate them with CSS and/or JavaScript. 

## Part 3: Exporting and Scaling an SVG from Illustrator

Creating your own SVGs by hand works reasonably well if you're only creating simple shapes. But if you need to work with more complex images, you'll want to use an illustration program (like Adobe Illustrator, Inkscape, or even Google Draw) to create your image and then export it as an SVG. 

Download the [logo.ai](logo.ai), and open it in Adobe Illustator. You should see an image consisting of three arrows--one green, one blue, and and one purple. From the File menu, select Export As..., change the format to SVG, and select your week12 folder. After you click the Export button, you'll be presented with an "SVG Options" panel--most of the defaults are fine, but make sure you uncheck the "Minify" option, which removes whitespace from the SVG making it harder to read and edit. 

Open the resulting logo.svg file in a browser. The logo, which looked a lot smaller in Illustrator, should fill up your browser window. 

Take a look at the logo.svg file in a text editor. You'll see that the svg element does not have a width and height specified, but it does have a "viewbox" attribute. 

Scaling SVGs is a little bit tricky, because it depends on two separate things:
- the *viewport* is the containing element for the SVG, which can be explicitly set with the width and height attributes, and defaults to the size of the containing element
- the *viewbox*, which is an SVG-specific attribute that defines the aspect ratio of the image, how all the lengths and coordinates used inside the SVG should be scaled to fit the total space available, and the origin of the SVG coordinate system, the point where x=0 and y=0. 

The CSS-Tricks site has [a more detailed description of how SVG scaling works](https://css-tricks.com/scale-svg/). 

You can also see that the logo.svg has its own embedded style sheet, which is how Illustrator assigned the fill colors. The arrows are each defined as paths, with a transform applied to them to adjust rotation. 

When you load svgdemo.html in a browser now, the logo will be even bigger. We can fix that by changing the viewport associated with the SVG. That can be done either by adding width and height attributes to the svg element itself, or by using a CSS declaration in the html file to change the size of the SVG id. If we use the CSS approach, we can also add a border so it's easier to see the edges of the viewport. Add this to the head of the document:

```html
<style>
  #Layer_1 { width: 200px; height: 200px; border: 1px solid black; }
</style>
```

Reload the page, and the logo should now take up a 200x200px box in the top left corner of the page. Try changing the width of #Layer_1 to 300px. Because it's the viewbox, not the viewport, that controls the aspect ratio, the logo should not change even though the box is wider. 

Now download the [logo.png](logo.png) file to your week12 folder, and add this line to svgdemo.html, above the svg code:

```html
<img src="logo.png" style="float: left;" >
```

Reload the page, and you should see two versions of the logo; the one on the left is a PNG version that I exported from the Illustrator file, and the one on the right is the SVG. Depending on the resolution of your monitor, you may be able to see that the SVG version has slightly crisper lines. Try zooming in on the page (Ctrl-+ in Chrome). As the zoom level increases, you should start to see significant differences in the clarity of the two versions of the logo. While the SVG version is higher quality, it is also significantly smaller in size. The PNG is 3,851 bytes, while the SVG is 1,024 bytes. If we exported a larger size of the PNG, it would result in a larger file size, but we can scale the SVG up without any change in file size. 

## Part 4: Submitting Your Work 

Upload your week12 folder (making sure it includes the svgdemo.html, logo.svg, and logo.png files) to your igme230 folder on Banjo, and create a link from your main igme230 page to the svdemo.html page. This assignment is due by the start of class on Thursday, 20 April. 
