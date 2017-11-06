# Magnetic Poetry Exercise 2: Using jQueryUI

## Overview
In this assignment you will simplify the code for your magnetic poetry exercise to use jQueryUI's "draggable" function.

## Getting Started
Make a copy of your magnetic-poetry.html file and called it magnetic-poetry2.html. 

## The jQuery UI Draggable Function
Much of our code in the original document was designed to get the cursor location, and trigger actions based on the user's mouse actions. All of that is built into the jQueryUI Draggable interaction. Take a look at the [Draggable example]((https://jqueryui.com/draggable/), as well as the [full API documentation](http://api.jqueryui.com/draggable/).  

## Linking to the jQuery & jQueryUI Script Libraries
Rather than downloading the entire jQuery and jQueryUI libraries to your local project folder, you're going to link to hosted versions of the code. (Also known as CDNs, or content delivery networks.) Most commonly-used libraries can be found in multiple hosted locations. [jQuery has its own CDN](https://code.jquery.com/), or you can use [Google Hosted Libraries](https://developers.google.com/speed/libraries/#jquery). 

The jQuery UI example code uses the 1.12.4 version of jQuery and the 1.12.1 version of jQueryUI from the jQuery CDN. You can use the same versions, but I recommend using the most recent version of jQuery (3.2.1 as of this writing). Add the necessary script link tags to the head of your document, before your existing script tag. 

Note that jQueryUI also requires you to include their stylesheet. The URL includes a reference to a specific theme. The Google Hosted Library link uses the `smoothness` theme, but the [jQuery CDN site](https://code.jquery.com/) gives you a list of the other possible options. 

You can also use the [jQueryUI ThemeRoller](http://jqueryui.com/themeroller/) to customize your theme with specific colors and attributes. If you do this, you'll need to download the resulting CSS file and link to it locally rather than using the hosted version. (For this exercise it won't matter, but if you use jQueryUI for UI elements like navigation it will.)

## Adding the Draggable Function
We're going to add the draggable function to all of the elements with the class of `.word`. To do that, we need to include this in our `window.onload` function:
```javascript
 $( ".word, .titleWord" ).draggable();
```

We also need to do this for the `.titleWord` class. W3Schools has a good reference on [jQuery selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp). Using that, modify the function above to select both classes. 

## Removing Unnecessary Code
With the Draggable functionality attached to the words, we no longer need any mouse event handlers in our script. However, we do still need to do the initial positioning of the words in the tray and the starter poem with `getWords()`, `setPosition()`,`positionWords()`, and  `setupStartingPoem()`. 

You can safely remove:
- The `setupDragging()` and `getMousePos()` functions. 
- Anything related to `doMousedown` inside the `positionWords` function.  

Edit your existing script to remove the unnecessary code. Test it to make sure you haven't deleted anything you needed!

## Modifying the Draggable Behavior
In our original code, we changed the z-index of the word we were dragging, so that it displayed above the other words. The jQueryUI Draggable interaction doesn't do that by default, but you can fix it using the [`stack` option](http://api.jqueryui.com/draggable/#option-stack). Modify your draggable instruction to make the word being dragged stack on top of all of the other words. (Hint: the words all share the same class!)

Once you have this working, open the Elements tab of the inspector, and look at how the attributes of the words change as you drag them. 


## Optional Challenge 1: Constrain the Title Words in Sidebar
Using an option from the Draggable API, constrain the movement of the title words so that they can't be removed from the sidebar. 

(An even more difficult challenge would be to find a way to constrain the poetry words so that they can only be on the fridge or in the tray.) 

## Optional Challenge 2: Reading the Words from an Array
Instead of putting the poetry words directly into your HTML, define them as an array in your script, and then add a function to loop through the array, create the `<p>` elements, and insert them into the DOM.

*If you use different words in your array, the same caveat from the last exercise applies: make sure you modify your code for the starting poem to only use words that are in your list. You should also remove any phrases or any words with punctuation.)*

## Submission
Upload your revised file to banjo.rit.edu, and link to it from your class page. It must be submitted by 11:59pm on Wednesday, November 9. 

## Possible Enhancements
There is quite a bit you could do with this app to make it a potential portfolio or final project piece. Here are a few ideas:
- add a button that resets the board to its starting state
- load new word sets with a `<select>` option
- use images instead of words
- save poems to local storage
- share poems with a querystring URL
- slightly rotate words when they're moved so they look more realistic (CSS transform/rotation)
- allow users to add words (be careful here; never underestimate users' ability to make trouble when allowed to create content)