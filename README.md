# Peridot Carbon website

The public landing page for Peridot Carbon, built as a GitHub Pages-compatible
Jekyll site.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In **Settings > Pages**, set the source to **Deploy from a branch**.
3. Select the `main` branch and the repository root (`/`).
4. GitHub Pages will build and publish the site using its supported Jekyll
   environment.

### Connect `peridotcarbon.com`

1. Verify `peridotcarbon.com` in the GitHub account or organisation that will
   own the repository. Do this before changing DNS records.
2. In **Settings > Pages**, enter `peridotcarbon.com` as the custom domain.
   The root [CNAME](CNAME) file is committed so the domain configuration stays
   with the published branch.
3. At GoDaddy, create these four `A` records for host `@`:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

4. Also create a `CNAME` record for host `www` pointing directly to
   `YOUR-GITHUB-ACCOUNT.github.io` (or
   `YOUR-GITHUB-ORGANISATION.github.io`). Do not point `www` at
   `peridotcarbon.com`.
5. Do not use wildcard records such as `*.peridotcarbon.com`. Once GitHub has
   provisioned the certificate, enable **Enforce HTTPS** in **Settings >
   Pages**.

DNS changes can take up to 24 hours. On Windows, verify the apex records with
`Resolve-DnsName peridotcarbon.com -Type A` in PowerShell. Verify that the
published canonical URL, sitemap and robots file load over HTTPS before
announcing the site.

For local preview, install Ruby 3.2 or later, then run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

The local preview uses current Jekyll 4 for compatibility with modern Ruby on
Windows. The source itself is intentionally limited to GitHub Pages-compatible
Jekyll features, so GitHub Pages can build it with its managed Jekyll runtime.

## Asset and copyright policy

The geometric visuals are original CSS. Approved production logo exports are
stored in `assets/brand/`. Third-party images used by the website are listed in
[NOTICE](NOTICE); replace them with approved first-party photography when it is
available.

The site and brand materials are proprietary. Read [NOTICE](NOTICE) and
[LICENSE](LICENSE) before reusing any material.

This repository is intended to be public for GitHub Pages. Everyone can view
and download its complete Git history, so do not commit credentials, customer
information, unpublished reports, paid assets or private source material.
Keep local credentials in `.env`, which is ignored, and rotate any credential
that has been shared or accidentally committed. Copyright notices establish
legal terms; they do not technically prevent copying of public files.
