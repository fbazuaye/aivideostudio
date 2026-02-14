

## Add Google Ads Tracking Code

Add the Google Ads conversion tracking snippet (gtag.js) to the application so it loads on every page.

### What will change

The Google tag (gtag.js) script with ID `AW-17953468886` will be added to the `index.html` file in the `<head>` section. This enables Google Ads conversion tracking across the entire site.

### Technical Details

**File: `index.html`**
- Add the async gtag.js script tag pointing to `https://www.googletagmanager.com/gtag/js?id=AW-17953468886`
- Add the inline configuration script that initializes the dataLayer and calls `gtag('config', 'AW-17953468886')`
- Both scripts will be placed in the `<head>` section before the closing `</head>` tag

