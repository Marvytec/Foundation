AMARA HOPE FOUNDATION - DEMO WEBSITE
====================================

FILES
  index.html          Home
  story.html          Our story
  programs.html       Programs
  partners.html       Partners
  get-involved.html   Get involved
  contact.html        Contact
  style.css           All styling and animations (shared by every page)
  script.js           Menu, scroll effects, hover effect (shared by every page)
  assets/             Put logo and photos here

HOW TO VIEW
  Double-click index.html. The menu links the pages together.

HOW TO EDIT
  - Edit text directly inside each page's <main> section.
  - The header (menu) and footer are repeated in every .html file. If you change
    the menu or footer, make the same change in all six files.
  - Demo name "Amara Hope Foundation" and "Amara" are stand-ins. Use find-and-replace
    across all files to swap in the real names.
  - Colours: search style.css for "--accent" (second :root block). That is the main red.
  - Photos for the banner and section backgrounds: open style.css. The first block
    ("SECTION PHOTOS - EDIT THESE LINES") lists every one. Save your picture in assets/
    with any name, then type that name in the matching line, e.g.
      --img-story: url(assets/my-story-photo.jpg);
    Until a picture is found, that section shows a plain dark red background.
  - Photos inside pages (Amara, founder, outreach gallery, sponsor logos): each is an
    <img src="assets/..."> line in the page's .html file. Change the file name there.
  - Stats on Home ([00]), bank details, email, phone and social links are placeholders.
  - Each page's <body data-page="..."> value tells the menu which link to highlight.

GOING LIVE
  Upload all files (keeping the assets folder) to any web host.
