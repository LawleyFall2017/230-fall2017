# Week 7 Tuesday Exercise: CSS Animation (7 March 2017)

## Overview & Goals
Today you're going to take the restaurant page you built for last week's exercise and animate some elements on the page using the techniques shown in the CSS Animations tutorial. If you haven't done either, you should use today's class to first complete the exercise from last week, and then, if you have time, work on the tutorial. 

## Previewing What You're Going to Make
Because I can't give you the functioning animation without also revealing the code to accomplish it, I've uploaded a video clip to YouTube showing how the page behaves when it first loads, and when mousing over specific elements. Watch it here: https://youtu.be/h78Js94cJD4 (Note: after I uploaded this video I changed the technique for scaling the food images; the approach described below in the exercise uses transitions rather than keyframe animations, and allows for easing-out of the scaling.)

## Setting Up
Make a copy of your completed week6 folder and call it week7. When you're done, you'll upload the week7 folder to your igme230 directory on banjo. All of the CSS you add will go into the styles.css page in the css subdirectory. 

## Page Load Animation
As you can see in the video, when the page first loads, the four columns of content in the middle of the page fly in from the left side. You're going to combine animation techniques used in the "clouds" exercise in the tutorial (chapter 3, part 1). 

You can copy the "drift" keyframe animation code from the clouds example into your styles.css file, rename the animation as "entrance" and then edit it to have a starting translateX value of -2000px (to put the content off the left side of the screeen), and a finishing value of 0,so that it ends up in its original position. 

Apply the resulting animation to the div.m3 element (all divs with a class of m3), with a duration of .5 seconds, a linear path, and "both" to use both forward and backwards fills, and then test the page. It should work, but all the elements will fly in at the same time. 

To fix that problem, you can do one of two things. You can assign a unique class to each of the columns and then specify timings for each of them individually, or you can use the "nth-child" technique shown in the "up & over" example in the tutorial (chapter 3, section 4). 

The disadvantage of adding a new class is that it requires you to also the edit the HTML file, while the "up & over" approach allows you do this completely in CSS using the "nth-child" attribute to set up four different timings for the four different columns, like this:

```css
div.m3:nth-child(1) {
    animation: entrance .5s 2s linear both;
}
```

Repeat that code block for the 2nd, 3rd, and 4th instances of div.m3, decreasing the delay by .5s for each, so that the 4th column slides in first, followed by the 3rd, 2nd, and then 1st. 


## Expanding Photos
To make the food images grow when you mouse over them, we could use keyframe animation (which is what I did in the video example), but there's actually an easier way to do this with [CSS transistions](https://www.w3schools.com/css/css3_transitions.asp).

All of the images we want to have grow on mouseover have the .responsive-img class, which makes it easy for us to do this without having to alter the html at all. We want to apply a *transition* property to all of those images, so that whenever something changes, it happens with a gentle easing in and out. Then we want to assign a *transform* property to the hover state, so that it scales up on hover (and, by default, back down when hover state is lost). 

```css
.responsive-img { transition: all .2s ease-in-out; }
.responsive-img:hover { transform: scale(1.2); }
```

## Rotating Icons
Finally, we want each of the four social media icons at the bottom of the page to rotate around their Y axis when we hover over them. 

To do this, we'll modify the spin animation in the "sticker" example (chapter 3, section 3) so that it rotates on the Y axis, replacing rotate(1turn) with rotateY(360deg)

Then you'll apply that spin animation to the same style rule that you used to turn the icons gray on mouseover:

```css
a:hover .fa { 
    color: #ccc;
    animation: spin .5s linear both;
    }
```
## Submitting Your Work
Upload the entire week7 folder to your igme230 folder on Banjo, and link to it from your main page. It should load properly at people.rit.edu/youruserid/igme230/week7/ . It must be submitted by noon tomorrow (Wednesday, March 8).



