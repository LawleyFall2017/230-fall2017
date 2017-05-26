# .htaccess for Authentication

## Overview & Goals

In today's exercise, you'll be doing two things. First, you'll configure an .htaccess file to limit access to RIT users. Then, you'll create a simple PHP page that (a) displays a text string, (b) displays a server variable, and (c) uses a PHP function to retrieve and format a date.  

Some useful resources on PHP:
* [W3Schools PHP Tutorial](https://www.w3schools.com/php/php_intro.asp)
* [PHP: A simple tutorial](http://php.net/manual/en/tutorial.php) 


## Using .htaccess for Authentication

On Tuesday, we looked at how .htaccess files can be used to modify the way a webserver treats content in your directory. Today, you're going to use it to restrict access to content in a directory. 

RIT makes it possible for you access the main user authentication system ("Shibboleth") in order to restrict web access to authorized users. You can use your .htaccess file to restrict access to *all* valid RIT users, or you can limit access to specific users. (Keep in mind that while you restrict access via the webserver using .htaccess, you cannot prevent other RIT users from logging into banjo.rit.edu and viewing the code of your files.)

To restrict access in a directory to any RIT user, you'll need to place these instructions in your .htaccess file:

```
AuthType shibboleth
ShibRequireSession on
SSLRequireSSL
require valid-user
```

The first line of the file tells the server what type of authentication is being used. The second specifies that a "session" needs to be created, which will keep track of your login status. (This means your "logged in" status will persist until you quit the browser.) The third requires the browser to use a secure connection to the server, so that your login credentials are encrypted. And the last line says that *any* user who can login to the RIT server can acccess your pages. 

If you already have an .htaccess file in your week14 directory, you can add those lines to the existing file. If you don't have an .htaccess file in the week14 directory, you should create one for this exercise. *Do ***not*** try to modify the .htaccess file in your www or igme230 directory, unless you're 100% sure you've got it working properly--if you get it wrong, you will lock me out of your files, guaranteeing a zero on this assignment (and on anything else you submit until you've fixed it).*

Upload the .htaccess file with the authentication instructions to your week14 directory. Make sure the permissions are set properly (644). Open a private browsing tab in your browser, so that any current authentication tokens you have on the computer don't affect how the page works, and go to the week14 directory. You should be prompted for your RIT user name and password, and after entering them properly, you should be able to view any files in the week14 directory. 

To restrict access to a specific user (or list of users), you would replace the last line with this, replacing the xyz1234 and abc6798 with the user ID (or IDs) that you want to provide access to.

```
require user xyz1234 abc6798
```
For this exercise, you should use your user ID and my user ID (ellics), so that I'll be able to grade your exercise.

Make sure this is working properly before going on to the next part of the exercise!

## PHP "Hello, World!"

In class this week we talked about server-side programming, and how it can be used to have the server dynamically insert content into a page before sending the page to the browser. Today you're going to create two very simple pages using the PHP programming language, so that you can see server-side programming in action. 

Create a file in your week14 directory called hello.php. (By giving the file the .php extension, you are telling both your code editor and the web server that this file contains php code.) 

Start with this basic HTML file: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Basic PHP</title>
</head>
<body>
    <h1>Basic PHP</h1>
 
 </body>
</html>
```

PHP code blocks must begin with `<?php` and end with `?>`

After the heading, add this block of PHP code:

```php
<?php 
    echo "<p>Hello, World!</p>"; 
?> 
```

Save the file, and view it locally in a browser. You shouldn't see anything on the page other than the heading, because your browser doesn't know what to do with PHP code. It will see the opening and closing angle brackets, and assume that this is an html tag of some sort. 

In order for the PHP code to execute, the page has to be parsed by the server's PHP processor. 

Upload the file to your week14 directory, and load it from there. You should see the Hello, World! text below the heading now. View the source of the page--your php code has been processed by the server, and replaced with the output of the command. 

## Retrieving Server Variables with PHP

Simply echoing a line of text isn't a particularly useful application of PHP, though. Let's try using PHP for something that you couldn't accomplish with HTML--displaying information about the server the page is stored on. 

Replace the "Hello, World" code with this:

```php
<?php
echo "<p>This page is hosted on the ";
echo $_SERVER['SERVER_NAME'];
echo " server.</p>";
?>
```

While this is also an echo command, it's outputting the value of a global PHP variable rather than a text string. PHP has a set of "super globals," one of which is the `$_SERVER array`. (You can see all of the elements of that array in the [$_SERVER documentation on the PHP website](http://php.net/manual/en/reserved.variables.server.php).

Upload the edited file to your week14 directory on banjo, and load it in a browser--the server variable should have been replaced with "people.rit.edu". 

## Using Built-In PHP Functions

Next, you'll use a built-in PHP function to output the current date and time. The date function requires you specify the format you'd like the date output as. A simple example would be to output the date in a number month/day/year, e.g. 5/3/2017. To do that, you'd echo the output of `date("d/m/y")`. 

Add this to your current code:

```php
echo date("d/m/y");
```

Upload and test it. You should see the date on your page. 

Using the [date format documentation on the PHP website](http://php.net/manual/en/function.date.php), modify the date function so that it displays the date and time in this format:

`10:30am, Wednesday, May 3rd, 2017`

Once you've got that working, add some text strings before and after it (as we did with the server variable), so that the result looks like this:

`<p>It's currently 3:11pm, Wednesday, May 3rd, 2017</p>`


## Due Date
The finished exercise should be a file called hello.php in your week14 folder, which is protected by RIT authentication, and displays server name as well as the current date and time.
