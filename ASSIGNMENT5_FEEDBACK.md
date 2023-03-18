Hi Masieh!


UPDATED 18-3-2023

Nice refactoring! 

You've met the requirements for a Godkänt grade, congratulations,  but will have to fix a few more things to earn a VG grade.

Let me know what you want to do.

--------------------------------------------------
As you can see below there are a few tings to fix in this assignment, I'm afraid.

My advice is to break about, projects and content into different html pages. Then make a general CSS file for things like the header, nav and footer and link to it in each html page.

Then make specific css files for the elements unique to each page.

That should just about get you to a godkänt grade, to be safe download a font and ad it in a typography file - using the @font-face rule.

Please make these fixes and resubmit. Don't hesitate f you have any questions.

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅ ❌
    You have 2 on index.html and about.html

  Mail to Contact form ✅ ❌
    form action should be: "mailto:" with an email address. This will force the user's email browser to open: <form action="/contact" method="POST">

  Links to specific projects opening in new windows ✅

CSS
  External CSS ✅

  General style sheets for common elements ✅
    Nice!

  Typography style sheet ❌ ✅
    You are importing a font and handling it correctly, but it should be in a specific typography.css file

  Locally installed font ❌
    
  Separate stylesheets for each page ✅
    Well done!

  RWD
    Desktop ✅
    Mobile ✅ ❌
      The background image doesn't cover the entire page height on mobile

JS
  jQuery plugin (such as a carousel) ❌

  JS/jQuery multi level menu (min 2 levels) ❌
  

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ❌ 
    Add directories for html, css, images and js
    

  CSS prefixing where required ❌
    Use a tool like https://autoprefixer.github.io/

  jQuery effects ❌
    Looking for the built in effects like slide and fade

  Semantic element naming ❌ ✅
    <main class="bg"> is not a goodd name!
    <section id="thatsMe"> and <div id="thats-me" class=""> can you think of different identifiers?

  Code style
   HTML: ✅
   CSS: ✅
   JS: ✅
     $("#thats-me").hide(), $("#projects").hide(), $("#contact-page").hide();
     can be shortened to:
     $("#thats-me, #projects, #contact-page").hide();