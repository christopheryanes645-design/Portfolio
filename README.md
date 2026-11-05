# Christopher Yanes — Full Engineering Portfolio

A GitHub-ready copy of Christopher’s current mechanical engineering portfolio. Includes the minimalist layout, seven project galleries, image viewer, résumé, and contact links. The mechanical pencil project is excluded.

This package keeps Christopher’s current content so it can be published as his portfolio immediately. It has no build step, dependencies, or Sites hosting requirement.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Create a GitHub repository, or open the repository you want to use.
3. Choose **Add file → Upload files**.
4. Upload the files and the `assets` folder from INSIDE this folder. `index.html` must be at the repository’s top level, not inside another folder. Do not upload the ZIP itself.
5. Commit the files. Keep the `assets` folder structure intact. If hidden files are not uploaded, you can create the empty `.nojekyll` file through GitHub’s file editor.

If replacing an existing site, first download a backup of that repository. This ZIP contains no Git history or credentials.

## Publish with GitHub Pages

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` (or the branch containing these files) and **/ (root)**, then Save.
4. GitHub will show the website URL when deployment completes.

For the repository `christopheryanes645-design/Portfolio`, the standard Pages address is `https://christopheryanes645-design.github.io/Portfolio/`. This is an expected address, not confirmation that Pages is already enabled.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Make it a reusable GitHub template

In the repository’s **Settings**, select **Template repository**. You can then use **Use this template → Create a new repository** to start another copy.

Template documentation: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository

## Customize

- `index.html`: name, introduction, About section, phone number, résumé and social links, page title, and hero image.
- `content.js`: email, project titles, descriptions, case studies, gallery captions, and PDF links.
- `style.css`: colors, type, spacing, and responsive layout.
- `app.js`: project rendering and click-to-enlarge image viewer.
- `assets/`: images and PDFs referenced by the site.

To add a project, duplicate an existing object inside the `projects` array in `content.js`, give it a unique `id`, and update its content and asset paths. Project navigation and numbering update automatically. Remove the full object to remove a project.

Keep paths relative, such as `assets/photo.jpg`, so the site works under a GitHub repository URL. When reusing the design for someone else, replace Christopher’s identity, contact information, social links, résumé, certificate, and project media before publishing.

## Preview locally

Open `index.html` in a browser, or serve the folder with:

```sh
python3 -m http.server 8765
```

Then visit http://localhost:8765.

## Licensing

Website code is MIT licensed; see `LICENSE`. Project photographs, screenshots, drawings, résumé, certificate, and other media are not covered by that license. They retain their original rights. `ASSETS.md` records the source collection’s provenance; some documented assets are omitted from this curated export because the site no longer references them.

This is a standalone export. Editing or publishing it on GitHub does not change the existing chatgpt.site portfolio.

## Application portfolio

The contact section includes the updated six-page PDF portfolio. The site contact email is christopheryanes645@gmail.com. The PDF contains no online portfolio links.
