# Prarthna Singh Portfolio

This is a static portfolio for Prarthna Singh. It uses plain HTML, CSS, and JavaScript, so it works directly on GitHub Pages.

## Files

- `index.html` - page structure and content
- `styles.css` - complete responsive styling
- `script.js` - mobile menu, reveal animation, project detail switching

## What you must edit

Open `index.html` and update the project names, descriptions, technologies, leadership details, and the hero image URL if you want your own photo.

Do not leave project examples unchanged if you have not actually built them. Recruiters notice filler immediately.

## Run Locally

You can open `index.html` directly in your browser.

For a cleaner local preview, use VS Code:

1. Install the **Live Server** extension.
2. Right-click `index.html`.
3. Click **Open with Live Server**.

## Upload to GitHub Pages

1. Go to [GitHub](https://github.com) and sign in.
2. Click **New repository**.
3. Name it exactly:

   ```text
   prarthna1607.github.io
   ```

   Your GitHub username is `prarthna1607`, so the repository should be `prarthna1607.github.io`.

4. Keep it **Public**.
5. Click **Create repository**.
6. Upload these three files to the repository root:

   ```text
   index.html
   styles.css
   script.js
   ```

7. Commit the files.
8. Go to **Settings > Pages**.
9. Under **Build and deployment**, choose:

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: /root
   ```

10. Click **Save**.
11. Wait 1-5 minutes.
12. Open:

   ```text
   https://prarthna1607.github.io
   ```

## Better Git Upload Method

If you know Git, run these commands inside the folder:

```bash
git init
git add .
git commit -m "Create portfolio"
git branch -M main
git remote add origin https://github.com/prarthna1607/prarthna1607.github.io.git
git push -u origin main
```

This command assumes your GitHub Pages repository is named `prarthna1607.github.io`.
