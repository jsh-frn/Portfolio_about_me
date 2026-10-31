# Joshua Frian — IT Student Developer Portfolio

A responsive, minimal white/gray portfolio built with HTML, CSS, and JavaScript. Designed for publishing with GitHub Pages.

## Files

- `index.html` — portfolio content and page structure
- `style.css` — responsive layout and visual styles
- `script.js` — mobile navigation, current year, and contact-link reminder
- `assets/images/` — optional folder for screenshots and project images

## Before publishing

1. Open `index.html`.
2. Replace the GitHub link `https://github.com/` with your profile URL.
3. Replace `mailto:` with your professional email, e.g. `mailto:you@example.com`.
4. Replace `https://www.linkedin.com/` with your LinkedIn profile URL.
5. Check the project descriptions and certification names. Keep only details you can confirm.
6. Add screenshots you have permission to share, and update the project cards if you have approved public demos or repositories.

The contact links are intentionally generic until you add your real links. Do not publish passwords, API keys, private source code, personal IDs, or confidential capstone information.

## Test locally

Double-click `index.html` to open it in a browser. For a more reliable local preview, open the folder in Visual Studio Code and use a local preview extension such as Live Server.

## Publish on GitHub Pages

### Option A: GitHub website upload

1. Sign in to GitHub.
2. Create a **Public** repository named exactly `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your GitHub username).
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root. Upload the `assets` folder too if you added files to it.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait a few minutes, then visit `https://YOUR-USERNAME.github.io/`.

### Option B: Git from Visual Studio Code terminal

After creating the empty GitHub repository, open this folder in VS Code and run:

```bash
git init
git add .
git commit -m "Create student developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

Replace both instances of `YOUR-USERNAME` with your actual username. If Git asks you to sign in, follow GitHub's authentication prompt. Then enable GitHub Pages using Settings → Pages as described above.

## Updating the live website

Edit the files, save, then upload/commit the changes to the `main` branch. GitHub Pages republishes the site automatically after the changes are processed.

## Notes

- GitHub Pages supports static HTML, CSS, and JavaScript. It does not run PHP or MySQL server-side code.
- A public repository means the website source is visible to other people.
- Google Fonts is loaded from an external service; the page uses fallback fonts if it is unavailable.
