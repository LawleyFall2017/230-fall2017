# Week 14 Tuesday Exercise (2 May 2017)

## Overview & Goals

In today's exercise, you'll be adding .htaccess files to directories on banjo. You'll create the files using VS Code, and then upload them to the designated location(s). Today we'll focus on fixing some troublesome default behavior on the banjo.rit.edu server, and creating a custom 404 page for your site. On Thursday, we'll add in server-side authentication using RIT's login server. 

You'll probably find these resources helpful:
* [.htaccess-Guide](http://www.htaccess-guide.com/)
* [Comprehensive guide to .htaccess](http://www.javascriptkit.com/howto/htaccess.shtml)


## Using .htaccess To Change Default Server Behavior

Way back in January, during the first week of class, I asked you to create an .htaccess file for your main www directory on banjo.rit.edu, to change some of the server's default behavior. 

Specifically, the banjo/people web server uses a server module called "Pagespeed" to speed the loading of images--which is helpful when you have high-traffic websites like the main RIT page or departmental pages, but not really necessary for personal pages. The problem with this module is that it has the side effect of adding a lot of code to your pages when they're returned to the browser, making it harder to debug and validate them.  

You can't change the server settings for banjo--only the system administrator can do that. But you can change the way the server handles files in your account, using a file called .htaccess. The instructions in that file will affect how the server processes all of the files in the directory you place it in, as well as all of the files contained in any subdirectories.  

The period at the beginning of the file name is intentional; it indicates a hidden file in UNIX. However, that same period can make the file difficult to work with on a personal computer--depending on how you have your operating system configured, you may not be able to see hidden files in the explorer/finder environment. However, VS Code has no problem creating or reading hidden files. 

*If you ***already*** have a working .htaccess file that prevents the server from using the Pagespeed module when returning your files, you can skip the rest of this section--it simply repeats the material from the [Week 1 Thursday exercise](../week1/thursdayExercise.md).*

1) Make sure you have a local copy of your banjo.rit.edu file structure, and open the www folder with VS Code. Create a new file in the www folder called .htaccess, and in that file, put these two lines of text. The first line is a comment (indicated by a # followed by a space), and the second turns off the Pagespeed module for this directory (and all of the directories inside it). 
```
# Turn off server Pagespeed module
ModPagespeed Off
```

*Note: if you already have an .htaccess file in your www directory, you can add this line to the file rather than replacing the file.*

2) Use an SFTP client (like FileZilla) to upload the .htaccess file to the www folder on the banjo.rit.edu server.

3) Make sure you set the permissions on this file to 644 (Read and Write for you, Read only for group and other). You can do this using the FTP client, or by connecting to the server using PuTTY (on Windows) or Terminal (on Mac). 

4) Try loading your main IGME web page (people.rit.edu/youruserid/igme230) in a browser. If you get an error, you either made a mistake in the syntax of the file contents, or you didn't get the permissions right. Ask for help if necessary. If you don't get an error, view the source of your page (right-click on the page and choose "View Page Source" and make sure you don't see any unfamiliar blocks of code embedded in the page). 

## Creating a Custom 404 Page
Most professional website have a custom page that displays if you try to go to a page that doesn't exist on the site. That's quite easy to set up using .htaccess. 

1) Create a week14 folder in your igme230 directory, and in it put a new html file called custom404.html. (You can give it a different name, but if you do, make sure you use the file name you chose in step .) You can put whatever you'd like in the HTML--the example I showed in class had an `<h1>` that said "this is my custom 404 page" and a paragraph below that saying "The page you requested cannot be found." Feel free to be more creative; [here's some inspiration](http://www.creativebloq.com/web-design/best-404-pages-812505). 

2) After you've created your custom error page, create a new .htaccess file in the week14 directory. It will inherit the properties from the .htaccess in your www directory, and whatever you put here will be applied in addition to those directives. In the file, add the following lines (replacing *youruserid* with your **own** RIT ID):
```
# Add custom 404 error page
ErrorDocument 404 /youruserid/igme230/week14/custom404.html
```
Note that the path needs to be a complete path from the root of people.rit.edu down to the location of the custom error page--not a relative path. 

3) Upload the week14 directory and the two files to your igme230 directory on banjo. Make sure you set the permissions properly for the directory (755) and both files (644). 

4) Try going to a nonexistent page in your week14 directory--something like this: `http://people.rit.edu/youruserid/igme230/week14/nothere.html` . If you've done everything properly, you should see the URL you typed in the location bar, but the custom error page that you created in step 1 displayed in the browser. If it doesn't work, ask for help!

## Due Date
You must have this exercise completed by 10am on Wednesday, May 3rd.
