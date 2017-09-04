# Basic HTML & CSS Exercise 

## Overview & Goals

In today's exercise, we will be taking a text document, marking it up as an HTML document, adding basic CSS formatting, and uploading it to your RIT web space. 

We will also be adding a configuration file to your RIT web space to override some of the server's (problematic) default behavior.

## Important Resources

- **[Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/en-US/)**: A regularly updated archive of tutorials and reference guides for a wide variety of web technologies. Widely used by professional web developers. 
- **[W3 Schools](https://www.w3schools.com/)**: One of the older comprehensive web technology documentation sites. Used to have a reputation for being overly simplistic, but it has improved significantly in recent years. 


## Setting Up Your Folders and Files

On your computer (or on a USB drive) create a folder called igme230, and inside of the igme230 folder, create folder called week1. The igme230 folder is where all of your exercises and projects for this class will be stored. The week1 folder is for today's exercise. 

I've put a file called [cremebrulee.txt](cremebrulee.txt) in the weekly_materials\week1 folder here on Github. When you view that file on Github, you'll see that it's a plain text file that contains the content from the [Wikipedia entry for "Crème brûlée"](https://en.wikipedia.org/wiki/Cr%C3%A8me_br%C3%BBl%C3%A9e). 

To download the text file to your computer for this exercise, right-click on the button in the top right corner of the file that says "Raw," choose "Save link as...", and save the file to the week1 folder you just created.

You're also going to need to download the two images: [2014_0531_Crème_brûlée_Doi_Mae_Salong.jpg](2014_0531_Crème_brûlée_Doi_Mae_Salong.jpg) and [225px-Crema_Catalana_El_Glop.jpg](225px-Crema_Catalana_El_Glop.jpg). For each of those files, you will see a Download button in the top right corner. Right-click that button, choose "Save link as...", and download it to your local week1 folder. Then repeat that process with the second image, . 

## Setting Up VS Code

While you can use Visual Studio Code to open and edit a single file, it works best if you start by pointing it to the folder for the project you're working on. Launch VS Code (or your preferred HTML editor), and use "Open Folder" to open the week1 folder. You should see the three files that you downloaded in the last step. 

There are two VS Code extensions that will be particularly useful in today's exercise:  Preview on Web Server, and htmltagwrap, which allows you to select a block of text and easily wrap it with an HTML tag. To install a VS Code extension, choose View->Extensions, or click on the square icon at the bottom of the icon menu in the left sidebar. In the search bar at the top, type in the name of the extension you want to add. When it appears, click the green "Install" button to add it. (If you're using Brackets, it already has a live preview built in, and you can install an extension called HTML Wrapper.) It will probably prompt you to reload the current window in order to make the extension active--go ahead and do that. 

## Marking Up a Text File

In the file explorer list on the left, select the cremebrulee.txt file. It currently has no HTML markup at all--you're going to turn it into a proper HTML document, and add some simple CSS rules to make it look a bit more like the original Wikipedia entry. 

Use File->Save As... to save a new copy of the file called cremebrulee.html. Make sure you save it to the week1 folder and give it an .html extension--it's the file extension that tells your editor what kind of file you're working with so that it can provide appropriate syntax support. 

There are a lot of accented and foreign characters in this document. In HTML 4, the default character encoding for files was ISO-8859-1, which doesn't properly display special characters (like smart quotes and diacritical marks). Those characters had to be escaped out (e.g. &eacute; had to be represented as `&eacute;`, &copy; had to be represented as `&copy;`, and & had to be represented as `&amp;`)--if you didn't do that, they didn't display properly in the browser. HTML 5 uses UTF-8 encoding, which allows those special characters to display properly in your document. 

If you're using VS Code, try clicking in the bottom right corner of the window where it says "UTF-8", choose "Reopen with encoding," and select ISO-8859-1. Note what happens to all the non-standard characters in the document! If your HTML document doesn't use a character set of UTF-8--which is the default for HTML 5, but not for previous versions of HTML--that's what will display on the page. (Make sure you switch the encoding back to UTF-8 before you proceed.) 

We're going to use Emmet, a shorthand tool for adding HTML and CSS content to documents, to simplify the process of adding some basic HTML structure. (I talked about this a bit on Tuesday.)

Select the entire contents of the HTML document, and then press F1 (or select Command Palette from the View Menu). Type `Emmet:Wrap` and select "Emmet: Wrap With Abbreviation". You'll be prompted for the Emmet abbreviation you want to use. Type `html:5` and press Enter. You should see the basic structure tags for an HTML page (html, head, title, body) appear, with your selected content contained within the body tag. 

Note that several meta tags were included in the head of the document. The charset value is what tells the browser you're using UTF-8 (as discussed above). The viewport value is important when we start writing responsive code that adjusts to varied devices and window sizes. The final tag, `<meta http-equiv="X-UA-Compatible" content="ie=edge">`, is specifically to help Microsoft browsers properly determine how to render a page. (If you want more information on the what/why of that tag, there's a [discussion of it on Stack Overflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do).)

Now that the page structure is in place, we need to mark the text up as HTML. (Use the [actual wikipedia page](https://en.wikipedia.org/wiki/Cr%C3%A8me_br%C3%BBl%C3%A9e) as a reference.)

- Add an h1 heading for the page title, and h2 headings for all of the subsections.
- Add paragraph tags to the individual paragraphs of text. 
- Make the Contents and References sections into numbered ("ordered") lists, and the See Also, Bibliography, and External Links sections into bulleted ("unordered") lists. (Hint: Emmet can be very helpful with this, too!)
- Add the two images where indicated in the file, with appropriate alt text. Don't worry about positioning them for now; we'll deal with that when we add the CSS. 
- Use the `<sup>` tag to make each of the footnote references a superscript.
- Where appropriate, add tags to make text bold (`<strong>...</strong>`) and/or italicized (`<em>...</em>`).

Don't worry about adding links yet; we'll be doing that next week. 

Pay attention to the status bar at the bottom of the VS code window. If you see a number next to the triangle with an exclamation point, it means that VS Code has detected a problem with your code. If that happens, you can click on that number to see what the problem is. 

When you're done, preview your document (Ctrl-Shift-P or Ctrl-Shift-L in VS Code if you installed the Preview on Web Server extension). It should look something like this: ![Creme Brulee Page Without CSS](cremebrulee1.png)

## Publishing Your Files

*Note for New Media Design students: If you haven't ever uploaded files to banjo.rit.edu, which is the file server for the people.rit.edu web server, you should review the [prerequisite knowledge](../../README.md#prereq)) section in the syllabus (and emailed before the semester began). If you think you'll need a bit more time to get this exercise done, please contact me directly via private message on Slack or email to my Elizabeth.Lawley at rit dot edu address, and I'll grant you an extension until Sunday.*
 
Once you're satisfied with the html file, you're going to upload your igme230 folder (which includes your week1 folder and its contents) to your RIT web space. 

Using the SFTP program of your choice (the recommended option in the IGM labs is Filezilla), connect to the banjo.rit.edu server, and copy your entire igme230 folder into the www directory. (I'll demo this in class.)

Test it by going to `http://people.rit.edu/yourid/igme230/week1` -- you should see the .txt and .html files, and the two images. Click on the html file and make sure it displays properly. If you run into problems here, **ask for help ASAP**, in class, or via Slack. 

Often the problem is a simple issue related to fixing permissions on your files and/or folders. The quickest way to fix it is to use PuTTY to connect to banjo, and then run the command `ofw` (which stands for "open for web") to recursively change the permissions in your www directory. The next quickest way is to use your FTP client to make sure that the www, igme230, and week1 directories are all set to 755 (readable and executable by all users) and that all your files are set to 644 (readable by all users). 

## Adding Basic CSS Formatting
Now you're going to use CSS to start to make the page look a bit more like the original Wikipedia entry.

Create a new file in the week1 folder called cremebrulee.css. In the cremebrulee.html file, use Emmet to add a link to the stylesheet:
1. Put your cursor in the head of the document
2. Type `link:css` and then press tab; a css link tag should be inserted
3. Change the css file name in the link from styles.css to cremebrulee.css 

For today, since you've already done quite a bit of work, I'm going to give you the CSS to start with. However, if there's anything in this CSS that you don't understand, this would be an excellent time to ask the professor or the TA (or the #help channel in Slack, or the person sitting next to you who seems like they understand it) for clarification. 


Once you're sure you understand what they do, copy and paste the following style rules into your cremebrulee.css file:

```
body {
    font-family: 'Helvetica Neue', Helvetica, Arial,sans-serif;
    line-height: 1.4;
    padding-left: 20px;
}

a { text-decoration: none; }

h1, h2 {
    font-family: 'Linux Libertine', Georgia, Times, 'Times New Roman', serif;
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
Save the changes your HTML and CSS files, and upload them to your www/igme230/week1 directory. Your cremebrulee.html file should now look more like this: ![Creme Brulee Page With CSS](cremebrulee2.png)

You're done!

## Due Date
You must have this exercise completed by midnight tomorrow night (11:59pm on Friday, September 1). On Saturday morning, my grader or I will go to `http://people.rit.edu/youruserid/igme230/week1`, to see if all the files are there, and if they bear some resemblance to what was required. 
