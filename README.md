# Warisha Shahid — Software Engineering Portfolio

A responsive static portfolio website built with HTML, CSS, and vanilla JavaScript. No Python, Node.js, database, or build step is required.

## Folder structure

```text
warisha_portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── .gitkeep
    ├── Warisha-Shahid-CV.pdf   (add your own CV)
    └── projects/               (add real project screenshots here)
```

## Run locally

1. Extract the ZIP file.
2. Open the `warisha_portfolio` folder.
3. Double-click `index.html`.
4. The site should open in your default browser.

An internet connection is only needed for the optional Google Fonts. The website layout itself uses local files.

## Personalize the site

### GitHub and LinkedIn

Open `script.js` in a text editor. Near the top, update:

```js
const portfolioConfig = {
  github: "https://github.com/WarishaShahid520",
  linkedin: "https://www.linkedin.com/in/warisha-shahid",
  projects: {
    dermify: { github: "", demo: "" },
    stockwise: { github: "", demo: "" },
    resume: { github: "", demo: "" },
    bugtracker: { github: "", demo: "" }
  }
};
```

Replace the sample profile URLs with your real public URLs. For each project, add its actual repository URL and live demo URL. Leave values as empty strings if a repository or demo does not exist yet.

The portfolio cards are starter content. Update descriptions, technologies, status labels, and features so they accurately describe your tested code. Do not claim a project is complete if it does not run.

## Add your CV

1. Export your real CV as a PDF.
2. Name it exactly `Warisha-Shahid-CV.pdf`.
3. Put it in the `assets` folder.
4. The download button points to `assets/Warisha-Shahid-CV.pdf`.

## Add project screenshots

1. Capture screenshots from your actual running projects.
2. Save them in `assets/projects/`, for example `dermify.png` or `stockwise-dashboard.png`.
3. The current project covers are CSS illustrations, so they do not break if you have no screenshots yet.
4. To use a real screenshot, replace the relevant `.project-art` mockup in `index.html` with an image such as:

```html
<img class="project-screenshot" src="assets/projects/dermify.png" alt="Screenshot of the Dermify application">
```

Add this CSS to `style.css`:

```css
.project-screenshot {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}
```

Keep screenshot file names and paths exactly the same.

## Contact form

The contact form validates fields in the browser and prepares a message using the visitor's default email app (`mailto:`). It does not store or send messages through a server. For a production contact form, connect a form service or create a backend and update the README accordingly.

## Publish for free with GitHub Pages

1. Create a GitHub account if you do not already have one.
2. Create a new public repository, for example `warisha-portfolio`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder to the repository root.
4. Open the repository's **Settings → Pages**.
5. Under the build/deployment section, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)` folder, then save.
7. Wait for GitHub Pages to publish the site. The URL will be shown in the Pages settings.

Before publishing, test the site on a desktop and phone-sized browser, and verify every link.

## Checklist before sending to recruiters

- [ ] Add your real GitHub and LinkedIn URLs.
- [ ] Add your real CV PDF.
- [ ] Test every project and correct its status.
- [ ] Add actual project repository/demo links only.
- [ ] Remove technologies you have not used.
- [ ] Check spelling, mobile layout, and contact details.
- [ ] Never include passwords, private API keys, or sensitive personal information.
