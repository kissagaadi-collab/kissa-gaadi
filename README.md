# Kissa Gaadi landing page

Files
- index.html  : the page content (headlines, paragraphs, links, contact details)
- style.css   : colours and layout (brand colours are listed at the top, in :root)
- script.js   : interactive bits (service cards, route steps, feed-grid playground, form)
- assets/     : logo.webp and rickshaw.webp (replace these to change the pictures, keep the file names)

Editing the text
- Hero, About, contact: open index.html and search for the words you want to change.
- Service cards, route steps, marquee words, grid-playground text: open script.js and search for
  `var cards=`, `var stops=`, `var words=`, `var PR=`. Change only the words between the quotes.

Publishing on GitHub Pages
1. Create a free GitHub account and a new public repository (e.g. kissa-gaadi).
2. Upload everything in this folder (index.html, style.css, script.js, assets/, README.md).
3. Repository Settings > Pages > Source: "Deploy from a branch" > branch "main", folder "/ (root)" > Save.
4. After a minute or two the site is live at https://YOUR-USERNAME.github.io/kissa-gaadi/
5. To edit later: open a file on GitHub, click the pencil icon, change it, click "Commit changes".
