CUTFRAME STUDIO — EDITING GUIDE

Files:
- index.html  -> page content, project titles, descriptions and video filenames
- style.css   -> design, colors, spacing and responsive layout
- script.js   -> carousel behavior
- images/     -> profile images
- videos/     -> portfolio videos

ADDING A PROJECT:
1. Put the new video in videos/
2. Open index.html
3. Copy any <article class="project-slide">...</article> block
4. Paste it inside #projectCarousel
5. Change src, category, title and description
6. Save and refresh index.html in your browser

VIDEO EXAMPLE:
src="videos/my-project.mp4"

You can add as many project slides as you want. The counter and progress bar update automatically.
