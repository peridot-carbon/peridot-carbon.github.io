# Peridot Carbon website

The public landing page for Peridot Carbon, built as a GitHub Pages-compatible
Jekyll site.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In **Settings > Pages**, set the source to **Deploy from a branch**.
3. Select the `main` branch and the repository root (`/`).
4. GitHub Pages will build and publish the site using its supported Jekyll
   environment.

For local preview, install Ruby 3.2 or later, then run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

The local preview uses current Jekyll 4 for compatibility with modern Ruby on
Windows. The source itself is intentionally limited to GitHub Pages-compatible
Jekyll features, so GitHub Pages can build it with its managed Jekyll runtime.

## Asset and copyright policy

This repository intentionally uses no third-party image, icon, or web-font
assets. The geometric visuals are original CSS. The supplied logo previews are
displayed from `Branding/`; replace them with approved production logo exports
when available.

The site and brand materials are proprietary. Read [NOTICE](NOTICE) and
[LICENSE](LICENSE) before reusing any material.
