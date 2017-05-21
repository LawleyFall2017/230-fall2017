# Week 1 Thursday Exercise (26 Jan 2017)

## Overview & Goals

In today's exercise, we will be taking a text document, marking it up as an HTML document, adding basic CSS formatting, and uploading it to your RIT web space. 

We will also be adding a configuration file to your RIT web space to override some of the server's (problematic) default behavior.

## Setting Up Your Folders and Files

On your computer (or on a USB drive) create a folder called banjo. Inside of the banjo folder, put a folder called www . Inside of the www folder, put a folder called igme230. And inside of the igme230 folder, put folder called week1. The www folder represents your www directory on banjo.rit.edu. The igme230 folder is where all of your exercises and projects for this class will be stored. And the week1 folder is for today's exercise. 

I've put a file called [cremebrulee.txt](cremebrulee.txt) in the week1 folder on Github. When you view that file on Github, you'll see that it's a plain text file with the content from the [Wikipedia entry for "Crème brûlée"](https://en.wikipedia.org/wiki/Cr%C3%A8me_br%C3%BBl%C3%A9e). 

To download that text file to your computer for editing, right-click on the button in the top right corner of the file that says "Raw," choose "Save link as...", and select the week1 folder that you created in the previous step as the download destination.

You're also going to the two images in the week1 folder. Go up one level in the repo to the week1 folder, and click on the first image (2014_0531_Crème_brûlée_Doi_Mae_Salong.jpg). When it loads, there will be a Download button in the top right corner. Right-click that button, choose "Save link as...", and download it to your local week1 folder. Then epeat that process with the second image, 225px-Crema_Catalana_El_Glop.jpg. 

## Setting Up VS Code

While you can use Visual Studio Code to open and edit a single file, it works best if you point it to your working folder. Launch the program, and then choose "Open Folder..." from the File menu. Find the week1 folder you created on your local or USB drive, and and open it. You should see the three files that you downloaded in the last step. 

There are two VS Code extensions that will be particularly useful in today's exercise: Hasher (which replaces special characters with the appropriate HTML entity), and htmltagwrap, which allows you to select a block of text and easily wrap it with an HTML tag. To install the extensions now, choose View->Extensions, or click on the square icon at the bottom of the far left sidebar. In the search bar at the top, type in the name of the extension you want to add. When it appears, click the green "Install" button to add it. 

(If you don't like the light-on-dark colors that VS Code uses by default, you can select a different theme via File->Preferences->Color Theme.)

## Marking Up a Text File

Click on the cremebrulee.txt file, and it should display in the editor. It currently has no HTML markup at all--you're going to turn it into a proper HTML document, and add some simple CSS rules to make it look a bit more like the original Wikipedia entry. 

Use File->Save As... to save a new copy of the file called cremebrulee.html. Make sure you save it to the week1 folder. Giving it an .html extension will tell VS Code to enable its HTML support. 


There are a lot of accented and foreign characters in this document, which browsers won't interpret properly. You need to turn those into HTML entities. Happily, there's an easy way to do this. If you don't already have the Hasher extension installed, go to the extensions pane (bottom icon in the far left sidebar, or choose View->Extensions) and install it (type Hasher in the search box, and then click the install button when it appears). Once it's installed, you can highlight a word or phrase that has special characters (e.g. Crème brûlée), press the F1 key to open the command palette, and type "Hasher HTML". You'll see two options appear-- Hasher: HTML Entity Decode, and Hasher: HTML Entity Encode. Select the Encode option, and it will replace the accented characters with the appropriate HTML entity codes. You can do this individually for each word or phrase, or you can select the entire document and run the command. (Once you have HTML tags in your document, you won't want to run this on the entire document--it will replace the brackets on each tag with HTML entities!)

Now we need to mark the text up as HTML. 

- Add an h1 heading for the page title, and h2 headings for all of the subsections.
- Add paragraph tags to the individual paragraphs of text. 
- Make the Contents and References sections into numbered ("ordered") lists, and the See Also, Bibliography, and External Links sections into bulleted ("unordered") lists. (In class I'll show you a nice trick for this using Emmet.)
- Add the two images where indicated in the file. Don't worry about positioning them for now; we'll deal with that when we add the CSS. 
- Use the `<sup>` tag to make each of the footnote references a superscript.
- Where appropriate, add tags to make text bold (`<strong>...</strong>`) and/or italicized (`<em>...</em>`).

Don't worry about adding links yet; we'll be doing that next week. 

Pay attention to the status bar at the bottom of the editor window. If you see a number next to the triangle with an exclamation point, it means VS Code has detected a problem with your code. If that happens, you can click on that part of the status bar to open the "Problems" pane and see what the problem is. 

When you're done, open Chrome (or your browser of choice) and use Ctrl-O to locate and preview your file. It should look a lot like this: [cremebrulee1.png](cremebrulee1.png)

## Uploading

*Note for New Media Design students: If you haven't ever uploaded files to banjo.rit.edu, which is the file server for the people.rit.edu web server, you should review the [prerequisite knowledge](https://github.com/LawleyClasses/230-spring2017/blob/master/weekly_materials/week0/Prereq.md) section linked from the syllabus (and emailed before the semester began), and in particular the [exercise from IGME-110](https://github.com/LawleyClasses/230-spring2017/blob/master/weekly_materials/week0/110-Fall-2016-Week6-Web-Publishing-Exercise.pdf) that reviews the process of using an SFTP client to upload files to your web directory. If you think you'll need a bit more time to get this exercise done, please contact me directly via private message on Slack or email to my Elizabeth.Lawley at rit dot edu address, and I'll grant you an extension until Sunday.*
 
Once you're satisfied with the html file, you're going to upload the files you've been working on to your RIT web space. 

Using the SFTP program of your choice (the recommended option in the IGM labs is Filezilla), connect to the banjo.rit.edu server, and copy your entire igme230 folder to your www directory on banjo. (I'll demo this in class.)

Test it by going to `http://people.rit.edu/yourid/igme230/week1` -- you should see the .txt and .html files, and the two images. Click on the html file and make sure it displays properly. If you run into problems here, **ask for help**!

Once your page has displayed properly, type Ctrl-U to display the page source. You'll probably see a big block of completely unfamiliar code near the top of your page, where your first image is embedded. In the next section, I'll explain where that came from, and how we can make it go away. 

## Fixing Banjo

banjo.rit.edu implements several techniques to help pages load faster and more consistently, but these technique have the side effect of making pages on the server very hard for us to debug and to validate.

The solution? We need to add an .htaccess files to your www directory. .htaccess files allow you to make web server configuration changes on a per-folder
basis. The period at the beginning of the file name is intentional; it indicates a hidden file in UNIX. However, that same period can make the file difficult to work with on a Windows or Mac computer, so we're going to start with a file that does not include the period at the beginning of the name. We will be working with .htaccess files in more depth later in the semester, but for now we just want to get this file uploaded so that the server behaves properly for you.

(Note: If you already have an .htaccess file in your banjo www directory, rather than creating a new file as described below, you can simply add a line with the directive `ModPagespeed off` to the end of the existing file.)


1) In the www directory that you created on your local computer or USB drive, create a new file called htaccess, without the period at the beginning of the file name. In that file, put a single line of text:
   ModPagespeed off

2) Use an SFTP client to upload the htaccess file to the www folder in your banjo.rit.edu account.

3) Once you've uploaded the file, on Banjo, change its filename from htaccess to .htaccess (just add a . to the front of the name). 

4) Make sure you set the permissions on this file to 644 (Read and Write for you, Read only for group and other).

To see if this worked, reload your cremebrulee.html page on people.rit.edu, and view the source again. 

## Adding Basic CSS Formatting
Now we're going to use CSS to start to make this look a bit more like the original Wikipedia entry.

In the head of your document, add a link to an external stylesheet called cremebrulee.css. 

```
<link rel="stylesheet" type="text/css" href="cremebrulee.css" />
```

(You can use Emmet to automate this; just type `link:css` and press tab.)

Use File->New or Ctrl-N to create a new file, and save it to the week1 folder with the name cremebrulee.css.

For today, since we've already done quite a bit, I'm going to give you the CSS to start with. Paste the following style rules into your cremebrulee.css file:

```
body {
    font-family: 'Helvetica Neue','Helvetica','Nimbus Sans L','Arial','Liberation Sans',sans-serif;
    line-height: 1.4;
    padding-left: 20px;
}

a { text-decoration: none; }

h1, h2 {
    font-family: 'Linux Libertine',Georgia,Times,serif;
    line-height: 1.3;
    margin-bottom: 0.25em;
    padding: 0;
    border-bottom: 1px solid #a2a9b1;
    font-weight: normal;
    }

h1 {
    font-size: xx-large;
}
```
Save the changes your HTML and CSS files, and upload them to your week1 directory. Your cremebrulee.html file should now look more like this: [cremebrulee2.png](cremebrulee2.png)

You're done!

## Due Date
You must have this exercise complete by 11:59pm on Friday, January 27th. On Saturday, my grader will go to `http://people.rit.edu/youruserid/230/week1`, check to make sure all the files are there, and load the html file to make sure it bears some resemblance to what I asked for. 
